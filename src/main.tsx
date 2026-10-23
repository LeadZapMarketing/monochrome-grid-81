import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { preloadJournalRoute } from "./journalRoutes";
import "./index.css";

const render = () => createRoot(document.getElementById("root")!).render(<App />);

preloadJournalRoute(window.location.pathname).then(render, render);
