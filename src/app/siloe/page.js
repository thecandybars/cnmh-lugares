"use client";
import useVideoScroll from "@/hooks/useVideoScroll";

export default function Page_Siloe() {
  const altura = 800;

  const content = [
    {
      id: 0,
      content: (
        <div style={{ position: "relative", top: "-100vh" }}>Hola</div>
        // <div style={{ position: "relative", bottom: "100vh" }}>Hola</div>
      ),
    },
    {
      id: 1,
      content: (
        <div style={{ position: "relative", top: "700vh" }}>Chau</div>
        // <div style={{ position: "relative", bottom: "-700vh" }}>Chau</div>
      ),
    },
  ];

  const [ScrollVideo, scrollPosition] = useVideoScroll({
    src: "/lugares/siloe/siloe.mp4",
    altura: altura,
    content,
  });
  console.log("🚀 ~ Page ~ scrollPosition:", scrollPosition);
  return (
    <div>
      <h3>Video Scroll de Siloé</h3>
      {ScrollVideo}
    </div>
  );
}
