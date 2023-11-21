import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import WorkIcon from "@mui/icons-material/Work";
import ProfileImage from "./f1fan.jpg";

const Sidebar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        height: "100vh",
        width: "300px", // Adjust the width
        position: "fixed",
        top: 0,
        left: 100,
        padding: "60px",
      }}
    >
      <Avatar
        alt="Chad Sobies"
        src={ProfileImage}
        sx={{ width: 64, height: 64 }}
      />
      <Typography variant="h6">Chad Sobies</Typography>
      <Typography variant="subtitle1">@chadsobies</Typography>

      <List>
        {/* Use anchor tags for navigation */}
        <ListItem button>
          <a href="/" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}>
            <HomeIcon style={{ color: "#FFF9E8", marginRight: "8px" }} />
            <ListItemText primary="Home" disableTypography />
          </a>
        </ListItem>
        <ListItem button>
          <a href="/content" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}>
            <ArticleIcon style={{ color: "#FFF9E8", marginRight: "8px" }} />
            <ListItemText primary="Content" disableTypography />
          </a>
        </ListItem>
        <ListItem button>
          <a href="/jobs" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center" }}>
            <WorkIcon style={{ color: "#FFF9E8", marginRight: "8px" }} />
            <ListItemText primary="Jobs" disableTypography />
          </a>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
