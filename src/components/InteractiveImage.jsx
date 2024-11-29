"use client";

import PropTypes from "prop-types";
import {
  TransformWrapper,
  TransformComponent,
  // KeepScale,
} from "react-zoom-pan-pinch";
import { useState } from "react";
import {
  Box,
  Button,
  Fade,
  Slide,
  Stack,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import { theme } from "@/common/theme";
export default function InteractiveImage({
  src,
  hotspots = [],
  mainInfo = null,
}) {
  const [showText, setShowText] = useState({ visible: false, textBox: null });
  const [showMainInfo, setShowMainInfo] = useState(true);

  // RENDER HOTSPOTS
  const renderHotspots = (zoomToElement) => {
    return hotspots.map((hotspot) => (
      <Box
        key={hotspot.id}
        onClick={() => {
          zoomToElement(hotspot.id, hotspot.zoom || 3.5, 1000);
          setShowText({
            visible: true,
            textBox: { ...hotspot.textBox },
            titulo: hotspot.titulo,
          });
        }}
        id={hotspot.id}
        sx={{
          position: "absolute",
          top: hotspot.top,
          left: hotspot.left,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          cursor: "pointer",
          transform: "translate(-50%, -50%)",
          backgroundColor: theme.palette.secondary.main,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 100,
        }}
      >
        <Tooltip title={!showText.visible && hotspot.titulo}>
          <AddCircleOutlineIcon
            color={theme.palette.primary.main}
            size="large"
          />
        </Tooltip>
      </Box>
    ));
  };

  // RENDER MAIN INFO
  const renderMainInfo = (
    <Fade in={!showText.visible} timeout={800}>
      <Box
        display="flex"
        sx={{
          position: "absolute",
          alignItems: "flex-end",
          gap: 1,
          bottom: 20,
          left: 20,
          zIndex: 10,
        }}
      >
        <Box
          onClick={() => setShowMainInfo(!showMainInfo)}
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            cursor: "pointer",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {showMainInfo ? (
            <CancelIcon size="large" color={theme.palette.primary.main} />
          ) : (
            <InfoOutlinedIcon size="large" color={theme.palette.primary.main} />
          )}
        </Box>
        <Slide in={showMainInfo} timeout={200} direction="up">
          <Stack
            gap={1}
            sx={{
              bgcolor: "rgba(0,0,0,0.8)",
              p: 1,
              width: "60%",
            }}
          >
            <Typography variant="h6">{mainInfo && mainInfo.title}</Typography>
            <Typography variant="body">
              {mainInfo && mainInfo.content}
            </Typography>
          </Stack>
        </Slide>
      </Box>
    </Fade>
  );

  // RENDER DIALOGS WHEN ZOOM IN
  const renderDialogZoomed = showText.textBox && (
    <Zoom
      in={showText.visible}
      style={{
        transitionDelay: showText.visible ? "800ms" : "0ms",
      }}
    >
      <Stack
        gap={1}
        sx={{
          position: "absolute",
          top: showText.textBox.top || "50%",
          left: showText.textBox.left || "50%",
          backgroundColor: "black",
          padding: "10px",
          width: "40%",
          borderRadius: "8px",
          zIndex: 1000,
          color: "white",
        }}
      >
        <Typography variant="h4"> {showText.titulo}</Typography>
        <Typography variant="body"> {showText.textBox.content}</Typography>
        <Button
          onClick={() => {
            setShowText({ visible: false, textBox: null, titulo: "" });
          }}
        >
          Cerrar
        </Button>
      </Stack>
    </Zoom>
  );

  return (
    <div style={{ position: "relative", width: "auto" }}>
      <TransformWrapper
        initialScale={1}
        minScale={0.2}
        maxScale={10}
        centerOnInit
        centerZoomedOut={true}
        onZoomStart={(e) => console.log(e)}
        onPanningStart={(e) => console.log(e)}
        // wheel={{ disabled: true }}
        // panning={{ disabled: true }}
        pinch={{ disabled: true }}
        doubleClick={{ disabled: true }}
      >
        {({ zoomToElement, resetTransform }) => {
          resetTransform(1500);
          return (
            <TransformComponent>
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <img
                  src={src}
                  alt="Zoomable"
                  style={{
                    width: "100%",
                    // height: "100%",
                    height: "100vh",
                    // objectFit: "contain",
                  }}
                />
                <Fade in={!showText.visible} timeout={800}>
                  <div> {renderHotspots(zoomToElement)}</div>
                </Fade>
              </div>
            </TransformComponent>
          );
        }}
      </TransformWrapper>
      {renderDialogZoomed}
      {renderMainInfo}
    </div>
  );
}

InteractiveImage.propTypes = {
  src: PropTypes.string,
  hotspots: PropTypes.array,
  zoom: PropTypes.number,
  mainInfo: PropTypes.object,
};
