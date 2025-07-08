import "@/styles/globals.css";
import 'leaflet/dist/leaflet.css';

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { ProjectProvider } from "../context/ProjectContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Only run on client
    if (typeof window !== "undefined") {
      (async () => {
        const L = await import("leaflet");

        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        });
      })();
    }
  }, []);

  return (
    <ProjectProvider>
      <Component {...pageProps} />
    </ProjectProvider>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});