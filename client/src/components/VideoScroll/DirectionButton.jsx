"use client";

import PropTypes from "prop-types";
import { Button, Typography } from "@mui/material";
import ArrowIcon from "@mui/icons-material/KeyboardArrowUp";
import { useRouter, usePathname } from "next/navigation";

export default function DirectionButton({ link }) {
  const router = useRouter();
  const pathname = usePathname(); // Get the current route path

  const handleNavigation = () => {
    // Combine the base path with the provided href
    const basePath = pathname.substring(0, pathname.lastIndexOf("/") + 1); // Keep everything up to the last "/"
    const fullPath = `${basePath}${link.href}`; // Append the new path
    router.push(fullPath); // Navigate to the new path
  };

  const styles = {
    button:
      link.direction === "forward"
        ? { flexDirection: "column" }
        : link.direction === "left"
        ? { flexDirection: "row" }
        : { flexDirection: "row-reverse" },
    icon:
      link.direction === "forward"
        ? { transform: "rotate(0deg)" }
        : link.direction === "left"
        ? { transform: "rotate(-90deg)" }
        : { transform: "rotate(90deg)" },
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleNavigation}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.8,
        ...styles.button,
      }}
    >
      <ArrowIcon sx={{ ...styles.icon }} />
      <Typography variant="h5" color="black">
        {link.title}
      </Typography>
    </Button>
  );
}

DirectionButton.propTypes = {
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    direction: PropTypes.oneOf(["forward", "left", "right"]).isRequired,
  }).isRequired,
};

// "use client";

// import Link from "next/link"; // Use Next.js Link
// import PropTypes from "prop-types";
// import { Button, Typography } from "@mui/material";
// import ArrowIcon from "@mui/icons-material/KeyboardArrowUp";
// import getEnv from "@/common/getEnv";
// // import { useRouter } from "next/compat/router";

// // import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function DirectionButton({ link }) {
//   const router = useRouter();
//   console.log("🚀 ~ DirectionButton ~ router:", router);
//   const [baseURL, setBaseURL] = useState("");

//   // const pathSegments = router.pathname.split("/").filter(Boolean); // Remove empty segments
//   // const baseLocation = `/${pathSegments[0] || ""}`; // Take only the first segment
//   // const baseURL = getEnv("client") + baseLocation;

//   // useEffect(() => {
//   //   if (router) console.log("🚀 ~ useEffect ~ router:", router);
//   // }, [router]);
//   const styles = {
//     button:
//       link.direction === "forward"
//         ? {
//             flexDirection: "column",
//           }
//         : link.direction === "left"
//         ? {
//             flexDirection: "row",
//           }
//         : {
//             flexDirection: "row-reverse",
//           },
//     icon:
//       link.direction === "forward"
//         ? {
//             rotate: "0deg",
//           }
//         : link.direction === "left"
//         ? {
//             rotate: "-90deg",
//           }
//         : {
//             rotate: "90deg",
//           },
//   };

//   return (
//     // <Link href={sanitizeURL(baseURL, link.href)} passHref>
//     <Button
//       variant="contained"
//       color="secondary"
//       display="flex"
//       gap={1}
//       onClick={() => router.replace((e) => console.log(e))}
//       sx={{
//         justifyContent: "center",
//         alignItems: "center",
//         opacity: 0.8,
//         ...styles.button,
//       }}
//     >
//       <ArrowIcon sx={{ ...styles.icon }} />
//       <Typography variant="h5" color="black">
//         {link.title}
//       </Typography>
//     </Button>
//     // </Link>
//   );
// }

// DirectionButton.propTypes = {
//   link: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     href: PropTypes.string.isRequired,
//     direction: PropTypes.oneOf(["forward", "left", "right"]).isRequired,
//   }).isRequired,
// };

// const sanitizeURL = (base, path) => {
//   const baseNormalized = base.endsWith("/") ? base.slice(0, -1) : base;
//   const pathNormalized = path.startsWith("/") ? path : `/${path}`;
//   return `${baseNormalized}${pathNormalized}`;
// };
