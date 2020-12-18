import { createMuiTheme } from "@material-ui/core";

import { palette } from "./palette";
import { typography } from "./typography";
import { overrides } from "./overrides";

export const defaultTheme = createMuiTheme({
  palette,
  //@ts-ignore
  typography,
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});
