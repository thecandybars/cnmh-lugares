const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();

// CORS
app.use(cors());

// Streaming de video basado en carpetas
app.get("/video/*", (req, res) => {
  const videoPath = path.resolve("video", req.params[0]);

  // File exists?
  if (!fs.existsSync(videoPath)) {
    return res.status(404).send("Video not found!");
  }

  const stat = fs.statSync(videoPath); // Get file stats
  const fileSize = stat.size;
  const range = req.headers.range; // Check for the "Range" header
  console.log("🚀 ~ app.get ~ req.headers:", req.headers);

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunkSize = end - start + 1;

    // Create a stream for the video chunk
    const file = fs.createReadStream(videoPath, { start, end });

    // Set the response headers for partial content
    const head = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    // Set the headers for the entire file
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    };

    res.writeHead(200, head);
    fs.createReadStream(videoPath).pipe(res); // Stream the entire file
  }
});

// Video streaming endpoint
// app.get("/video", (req, res) => {
//   const videoPath = path.resolve("videos/sample.mp4"); // Example video path
//   const stat = fs.statSync(videoPath);
//   const fileSize = stat.size;
//   const range = req.headers.range;

//   if (range) {
//     const parts = range.replace(/bytes=/, "").split("-");
//     const start = parseInt(parts[0], 10);
//     const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
//     const chunkSize = end - start + 1;
//     const file = fs.createReadStream(videoPath, { start, end });
//     const head = {
//       "Content-Range": `bytes ${start}-${end}/${fileSize}`,
//       "Accept-Ranges": "bytes",
//       "Content-Length": chunkSize,
//       "Content-Type": "video/mp4",
//     };
//     res.writeHead(206, head);
//     file.pipe(res);
//   } else {
//     const head = {
//       "Content-Length": fileSize,
//       "Content-Type": "video/mp4",
//     };
//     res.writeHead(200, head);
//     fs.createReadStream(videoPath).pipe(res);
//   }
// });

module.exports = app;
