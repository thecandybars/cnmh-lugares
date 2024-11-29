import { Box, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack component="main" gap={1}>
        <Image
          src="/cnmh-logo-bl.svg"
          alt="CNMH logo"
          width={280}
          height={38}
          priority
        />
        <h3>Lugares</h3>
        <ul>
          <li>
            <Link href="/lugares/bojaya/index.html">Bojayá</Link>
          </li>
          <li>
            <Link href="/lugares/siloe">Video Scroll de Siloé</Link>
          </li>
          <li>
            <Link href="/lugares/tumaco">Mural de Tumaco</Link>
          </li>
        </ul>
      </Stack>
    </Box>
  );
}
