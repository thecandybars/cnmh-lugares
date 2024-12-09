"use client";
import React from "react";
import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.cjs.jsx";

export default function page() {
  return (
    <div className={"scrolly-container"} style={{ height: `1800vh` }}>
      <ScrollyVideo
        src="https://scrollyvideo.js.org/goldengate.mp4"
        onChange={(e) => console.log(e)}
        onReady={() => console.log("ready")}
      />
    </div>
  );
}
