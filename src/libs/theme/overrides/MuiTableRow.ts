import { palette } from "../palette";

export const MuiTableRow = {
  root: {
    "&$selected": {
      backgroundColor: palette.background.default,
    },
    "&$hover": {
      "&:hover": {
        backgroundColor: palette.background.default,
      },
    },
  },
};
