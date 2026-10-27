import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'; 
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import type { Plugin } from "vite";
import sharp from "sharp";

// Project photos come in at up to 7,000 px wide but show at most screen-wide.
// Cap built jpg/png images at 1920 px wide (same photo, same crop) so phones
// do not download several MB per tile. Runs before ViteImageOptimizer.
const MAX_IMAGE_WIDTH = 1920;
const resizeLargeImages = (): Plugin => ({
  name: "resize-large-images",
  apply: "build",
  async generateBundle(_options, bundle) {
    for (const file of Object.values(bundle)) {
      if (file.type !== "asset" || !/\.(jpe?g|png)$/i.test(file.fileName)) continue;
      const input = Buffer.from(file.source as Uint8Array);
      const meta = await sharp(input).metadata();
      if (!meta.width || meta.width <= MAX_IMAGE_WIDTH) continue;
      const img = sharp(input).rotate().resize({ width: MAX_IMAGE_WIDTH, withoutEnlargement: true });
      file.source = /\.png$/i.test(file.fileName)
        ? await img.png({ compressionLevel: 9 }).toBuffer()
        : await img.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
    }
  },
});

// Project-grid tiles show photos at most ~1,000 px wide (phone, 3x screen).
// Next to every large project photo, write a tile-sized webp copy
// ("<name>-t.webp"); the homepage grid uses it, project pages keep the full one.
const TILE_WIDTH = 1024;
const tileCopies = (): Plugin => ({
  name: "project-tile-copies",
  apply: "build",
  async generateBundle(_options, bundle) {
    for (const file of Object.values(bundle)) {
      if (file.type !== "asset" || !/-s\.(jpe?g|png)$/i.test(file.fileName)) continue;
      const from = file.originalFileNames ?? [];
      if (!from.some((n) => n.includes("Archive/Projects/"))) continue;
      const input = Buffer.from(file.source as Uint8Array);
      const source = await sharp(input)
        .rotate()
        .resize({ width: TILE_WIDTH, withoutEnlargement: true })
        .webp({ quality: 72 })
        .toBuffer();
      this.emitFile({ type: "asset", fileName: file.fileName.replace(/\.(jpe?g|png)$/i, "-t.webp"), source });
    }
  },
});

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    allowedHosts: ["14b5-2001-e68-692c-f00-4108-44ee-4b1f-f160.ngrok-free.app"],
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // 将 CSS 注入 JS：彻底消除那 460ms 的外部 CSS 加载等待时间
    cssInjectedByJsPlugin(), 
    resizeLargeImages(),
    tileCopies(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg)$/i,
      includePublic: true,
      logStats: true,
      svg: {
        multipass: true,
        plugins: [
          // 删除了 removeViewBox，确保 SVG 图标在任何尺寸下都清晰且比例正确
          { name: 'sortAttrs' },
          { name: 'removeDimensions' }, // 移除固定宽高，让 CSS 更好控制尺寸
        ],
      },
      png: { quality: 80 },
      jpeg: { quality: 75, mozjpeg: true },
      jpg: { quality: 75, mozjpeg: true },
      webp: { quality: 80 }, // 高质量 WebP，保护建筑摄影的线条细节
      avif: { quality: 70 },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // 32KB 阈值：配合 CSS 内联插件，确保小资源不产生额外请求
    assetsInlineLimit: 32768, 
    cssMinify: true,
    reportCompressedSize: false, // 略微加快构建速度
    rollupOptions: {
      output: {
        // 强制不分包：减少 HTTP 请求往返，提升 LCP 发现速度
        manualChunks: undefined, 
        // "-s" marks the size-capped image build, so the live server gets the new files
        assetFileNames: (info) =>
          /\.(jpe?g|png)$/i.test(info.name ?? "") ? "assets/[name]-[hash]-s[extname]" : "assets/[name]-[hash][extname]",
      },
    },
  },
}));