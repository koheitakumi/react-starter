import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { LinkText } from "components/common";
import { PAGES } from "configs/constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      // @ts-ignore
      ...theme.mixins.content,
      background: "#f1f1f1",
    },
    root: {
      marginTop: `${theme.spacing(4)}px !important`,
      borderTop: `1px solid ${theme.palette.grey[300]}`,
      paddingTop: `${theme.spacing(2)}px !important`,
      paddingBottom: theme.spacing(4),
      paddingLeft: theme.spacing(4),
    },
    menuTitle: {
      fontWeight: "bold",
      marginTop: theme.spacing(1),
    },
    copyright: {
      paddingRight: "0.5em",
    },
  })
);

const ThisYear = new Date().getFullYear();

export default function AppFooter() {
  const s = useStyles();

  return (
    <div className={s.footer}>
      <div className={s.root}>
        <Grid container>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6" className={s.menuTitle} gutterBottom>
              Services
            </Typography>
            {PAGES.map((page, idx) => (
              <LinkText key={idx} href={page.to} text={page.label} />
            ))}
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6" className={s.menuTitle} gutterBottom>
              More
            </Typography>
            <LinkText text="Contact" href="/contact" />
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6" className={s.menuTitle} gutterBottom>
              Others
            </Typography>
            <LinkText text="Info" href="/" />
          </Grid>
        </Grid>
      </div>
      <div className={s.root}>
        <Typography>
          <span className={s.copyright}>
            &copy; {ThisYear} MyCompany. All rights reserved.
          </span>
        </Typography>
      </div>
    </div>
  );
}
