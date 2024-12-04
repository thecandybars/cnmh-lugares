"use client";
import { useEffect } from "react";
import VideoScroll from "@/components/VideoScroll/VideoScroll";

const RESET_SCROLL = true;

export default function EscalerasMiradorAmoSiloe() {
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
          title: "Dona Ana",
          href: "/hacia-dona-ana",
        },
      ],
    },
  ];

  return (
    <VideoScroll
      src="http://localhost:3001/video"
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
