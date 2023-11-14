import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Stack from "@mui/material/Stack";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItem from "@material-ui/core/ListItem";
import DraftsIcon from "@mui/icons-material/Drafts";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import WorkIcon from "@mui/icons-material/Work";
import { BrowserRouter as Switch } from "react-router-dom";
import PostFeed from "./PostFeed";
import Jobs from "./Jobs";
import Content from "./Content";
import ProfileImage from "./f1fan.jpg";
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from "react-router-dom";
import PropTypes from "prop-types";
import { StaticRouter } from "react-router-dom/server";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  leftSidebar: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
  profileInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profileImage: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginBottom: theme.spacing(2),
  },
}));

function Router(props) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/drafts">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={["/drafts"]} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

const Link = React.forwardRef(function Link(itemProps, ref) {
  return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

function ListItemLink(props) {
  const { icon, primary, to } = props;

  return (
    <li>
      <ListItem button component={Link} to={to}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

function Sidebar() {
  const classes = useStyles();

  return (
    <Stack height="100vh" sx={{ color: "#FFF9E8" }}>
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="Chad Sobies"
          src={ProfileImage}
          className={classes.profileImage}
        />
        <Stack>
          <Typography variant="h6">Chad Sobies</Typography>
          <Typography variant="subtitle1">@chadsobies</Typography>
        </Stack>
      </Stack>
      {/* <Routes>
          <Route path="/" element={<PostFeed />} />
          <Route path="/content" element={<Content />} />
          <Route path="/jobs" element={<Jobs />} /> */}
      {/* </Routes> */}
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <List aria-label="main mailbox folders">
          <ListItemLink
            to="/"
            primary="Home"
            icon={<HomeIcon style={{ color: "FFF9E8" }} />}
          />
          <ListItemLink
            to="/content"
            primary="Content"
            icon={<ArticleIcon style={{ color: "FFF9E8" }} />}
          />
          <ListItemLink
            to="/jobs"
            primary="Jobs"
            icon={<WorkIcon style={{ color: "FFF9E8" }} />}
          />
        </List>
      </Box>
    </Stack>
  );
}

export default Sidebar;
