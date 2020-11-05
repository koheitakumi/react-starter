import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar as MuiAppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { LinkText, Spacer } from "../common";
import { PAGES } from "../../configs/constants";
import MenuIcon from "@material-ui/icons/Menu";

interface Props extends React.Attributes {
  className?: string;
  children?: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: theme.zIndex.drawer + 1,
    },
    title: {
      fontWeight: 900,
      fontSize: "1.25rem",
      color: "#ffffff",
    },
    titleLink: {
      color: "inherit",
      textDecoration: "none",
      marginRight: theme.spacing(5),
      cursor: "pointer",
    },
    menu: {
      color: "inherit",
      fontWeight: 900,
    },
  })
);

export default function AppBar({ className, children, ...other }: Props) {
  const s = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const serviceMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      id="services-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {PAGES.map((page, idx) => (
        <MenuItem key={idx} onClick={handleMenuClose}>
          <LinkText href={page.to} text={page.label} />
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <>
      <MuiAppBar
        className={clsx(s.root, className)}
        position="fixed"
        elevation={0}
        {...other}
      >
        <Toolbar>
          <Link to="/" className={s.titleLink}>
            <Typography className={s.title}>PoC</Typography>
          </Link>
          <span className={s.titleLink}>
            <Typography className={s.menu} onClick={handleMenuOpen}>
              Services
            </Typography>
          </span>
          <Link to="/contact" className={s.titleLink}>
            <Typography className={s.menu}>Contact</Typography>
          </Link>
          {children}
          <Spacer />
          <IconButton color="inherit" aria-label="open drawer" edge="end">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </MuiAppBar>
      {serviceMenu}
    </>
  );
}
