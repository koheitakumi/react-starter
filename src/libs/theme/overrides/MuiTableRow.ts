import palette from "../palette";

export default {
  root: {
    "&$selected": {
      backgroundColor: palette.secondary.light,
    },
    "&$hover": {
      "&:hover": {
        backgroundColor: palette.secondary.light,
      },
    },
  },
};
