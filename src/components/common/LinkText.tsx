import { Link } from "react-router-dom";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      color: "rgba(0, 0, 0, 0.6)",
      textDecoration: "none",
      "&:hover": {
        textDocoration: "underline",
      },
      "&:visited": {
        color: theme.palette.text.primary,
      },
    },
  })
);

interface Prop {
  className?: string;
  href: string;
  text: string;
}

export const LinkText = ({ className, href, text }: Prop) => {
  const s = useStyles();

  return (
    <Typography>
      <Link to={href} className={clsx(s.link, className)}>
        {text}
      </Link>
    </Typography>
  );
};
