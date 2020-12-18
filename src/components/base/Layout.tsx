import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
import AppBar from "./AppBar";
import AppFooter from "./AppFooter";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(2, 0, 4, 0),
    },
    container: {
      //@ts-ignore
      ...theme.mixins.content,
      flexGrow: 1,
      padding: theme.spacing(0, 1, 0, 1),
    },
    main: {
      margin: theme.spacing(0, 0),
      display: "flex",
      flexWrap: "wrap",
      minWidth: 360,
      width: "100%",
    },
  })
);

interface Props extends React.Attributes {
  className?: string;
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const s = useStyles();

  return (
    <>
      <AppBar className={s.root} />
      <main className={s.content}>
        <div className={s.toolbar} />
        <Container maxWidth="md" className={s.container}>
          <Grid container spacing={2}>
            <Grid item xs={12} className={s.main}>
              {children}
            </Grid>
          </Grid>
        </Container>
      </main>
      <AppFooter />
    </>
  );
}
