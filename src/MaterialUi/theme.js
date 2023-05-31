import { createTheme } from "@mui/material";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
const theme = createTheme({
  typography: {
    fontFamily: ["OpenSans", "Mikhak"],
  },
  bgColo: {
    themeKey: "#f2f2f2",
  },
  direction: "rtl",
});

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
export { theme, cacheRtl };
