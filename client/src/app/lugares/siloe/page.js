import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Index_Siloe() {
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      height="100vh"
    >
      <Stack>
        <Typography variant="h1">Siloé</Typography>
        <Link href="/lugares/siloe/hacia-dona-ana">
          <Button
            color="secondary"
            //   component={Link}
            //   to="/siloe/hacia-dona-ana"
            variant="contained"
          >
            Iniciar
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}

export const videoURL = "/video/lugares/siloe/scroll";
