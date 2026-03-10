import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initPerformanceMonitoring } from "./lib/performanceMonitor";

// Initialize performance monitoring
initPerformanceMonitoring();

// Preload critical fonts
if ('fonts' in document) {
  document.fonts.ready.then(() => {
    document.documentElement.classList.add('fonts-loaded');
  });
}

createRoot(document.getElementById("root")!).render(<App />);
