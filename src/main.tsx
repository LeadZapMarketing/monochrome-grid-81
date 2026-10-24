import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { preloadJournalRoute } from "./journalRoutes";
import "./index.css";

const render = () => createRoot(document.getElementById("root")!).render(<App />);

// The ready-made page already shows the hero photo. React replaces that markup with
// its own copy, so let the browser paint the photo first: on phones the code often
// arrives before the photo has painted, and the photo then only counted as shown
// once all the code had run. Capped at 3 s so the page always comes alive.
const heroPainted = (): Promise<void> => {
  const imgs = Array.from(
    document.querySelectorAll<HTMLImageElement>('#root img[fetchpriority="high"]')
  );
  if (!imgs.length) return Promise.resolve();
  const painted = Promise.all(imgs.map((img) => img.decode().catch(() => undefined))).then(
    () => new Promise<void>((done) => requestAnimationFrame(() => requestAnimationFrame(() => done())))
  );
  return Promise.race([painted, new Promise<void>((done) => setTimeout(done, 3000))]);
};

Promise.all([preloadJournalRoute(window.location.pathname), heroPainted()]).then(render, render);
