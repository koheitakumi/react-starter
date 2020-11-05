import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#00171F";

// Color palette tool
// https://coolors.co/ffffff-00171f-003459-007ea7-00a8e8
export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: "#007EA7",
    main: "#007EA7",
    light: "#007EA7",
  },
  secondary: {
    contrastText: white,
    dark: "#003459",
    main: "#003459",
    light: "#003459",
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  icon: "#bfab52",
  divider: colors.grey[200],
};
