import { startTransition } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// A transition keeps the prerendered page on screen while a page's own code
// is still loading, instead of blanking it.
const root = createRoot(document.getElementById("root")!);
startTransition(() => {
  root.render(<App />);
});
