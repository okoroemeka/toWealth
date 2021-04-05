import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "@reach/router";

import * as displayMode from "../../../store/actions/displayMode";
import logout from "../../../store/actions/logout";
import TopNav from "../Navs/TopNav/TopNav";
import SideNav from "../Navs/SideNav/SideNav";
import { getUser } from "../../../store/actions/user";
import "./dashboard.scss";
import Navbar from "../Navs/TopNav/Navbar";
import Sidebar from "../Navs/SideNav/Sidebar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import clsx from "clsx";
// import ApiCall from '../../../helper/Api';
// import { toast } from 'react-toastify';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    // flexGrow: 1,
    paddingTop: "5rem",
    // [theme.breakpoints.down("sm")]: {
    //   paddingRight: "1rem",
    //   paddingLeft: "1rem",
    // },
    // [theme.breakpoints.up("sm")]: {
    //   paddingRight: "1rem",
    //   paddingLeft: "1rem",
    // },
    // padding: theme.spacing(3),
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Dashboard = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [showModal, setShowModal] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [
    // sideNavItemName,
    setSideNavItemName,
  ] = useState("userDashBoard");
  const topNavRef = useRef(null);
  const dispatch = useDispatch();

  const {
    darkMode: { darkMode },
    authLogin,
    signup,
  } = useSelector((state) => state);

  const fullname = authLogin?.data?.fullname
    ?.split(" ")
    .map((name) => name[0].toUpperCase() + name.slice(1))
    .join(" ");

  const handleDisplayDarkMode = () => {
    dispatch(displayMode.darkMode(true));
  };

  const handleDisplayLightMode = () => {
    dispatch(displayMode.lightMode(false));
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      topNavRef.current.focus();
    }
  }, [showModal]);
  useEffect(() => {
    async function user() {
      await dispatch(getUser());
    }
    user();
  }, [dispatch]);

  if (!authLogin.isLoggedIn && !signup.isLoggedIn)
    return <Redirect noThrow to="/" />;

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <TopNav
        userImage={authLogin?.data?.image}
        authLogin={authLogin}
        fullname={fullname}
        showModal={showModal}
        setShowModal={setShowModal}
        topNavRef={topNavRef}
        handleDisplayDarkMode={handleDisplayDarkMode}
        handleDisplayLightMode={handleDisplayLightMode}
        handleLogout={handleLogout}
      /> */}
      <Navbar
        fullname={fullname}
        handleLogout={handleLogout}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        fullname={fullname}
        position={authLogin?.data?.position}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: mobileOpen,
        })}
      >
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Dashboard;
