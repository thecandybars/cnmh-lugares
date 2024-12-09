"use client";
import { useEffect } from "react";
import VideoScroll from "@/components/VideoScroll/VideoScroll";
import { videoURL } from "../page";

const RESET_SCROLL = true;

export default function HaciaDoñaAna() {
  const source = `http://localhost:3001${videoURL}/tienda_dona_Ana.mp4`;

  useEffect(() => {
    RESET_SCROLL && window.scrollTo(0, 0);
  }, []);
  const navigation = [
    {
      id: 0,
      timeIn: 0.991,
      timeOut: 1,
      isBlocking: true,
      links: [
        {
          direction: "left",
          title: "Amo a Siloé",
          href: "/escaleras-mirador-amo-siloe",
        },
        {
          direction: "forward",
          title: "Mirador",
          href: "/escaleras-mirador-estrella",
        },
      ],
    },
  ];

  return (
    <VideoScroll
      src={source}
      speed={800}
      navigationHotspots={navigation}
      map={{
        pointA: [-76.558811, 3.423751],
        pointB: [-76.559311, 3.423558],
        zoom: 17.5,
      }}
    />
  );
}
