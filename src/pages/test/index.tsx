import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { width: "100%" },
  })
);

export default function Test() {
  const s = useStyles();

  return (
    <div className={s.root}>
      <Typography variant="h1">Expand Your Idea</Typography>
    </div>
  );
}
