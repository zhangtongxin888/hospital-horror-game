import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hospital Horror Game Wiki",
    short_name: "HHG Wiki",
    description: "Beginner-first, source-checked Hospital Horror Game guides.",
    start_url: "/",
    display: "standalone",
    background_color: "#090d12",
    theme_color: "#090d12",
    icons: [{ src: "/game-icon.png", sizes: "512x512", type: "image/png" }],
  };
}
