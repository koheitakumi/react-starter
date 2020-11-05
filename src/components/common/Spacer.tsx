import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    spacer: {
      flexGrow: 1,
    },
  })
);

export const Spacer = () => {
  const s = useStyles();
  return <span className={s.spacer} />;
};
