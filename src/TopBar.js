import React from "react";
import { Box, Grid, Link } from "@mui/material";
import photo1 from "./other.png"; // Import your PNG images
import photo2 from "./content.png"; // Import your PNG images
import photo3 from "./jobs.png";
// ... import other photos as needed

function TopBar() {
  return (
    <Box sx={{ backgroundColor: "#2b2928", color: "#ffffff", p: 2 }}>
      <Grid container spacing={2} justifyContent="right">
        <Grid item>
          <Link href="/jobs">
            <img src={photo3} alt="Page 1" width="350" />
          </Link>
        </Grid>
        <Grid item>
          <Link href="/content">
            <img src={photo2} alt="Page 2" width="350" />
          </Link>
        </Grid>
        <Grid item>
          <Link href="/">
            <img src={photo1} alt="Page 2" width="350" />
          </Link>
        </Grid>
        {/* Add more Grid items for additional links/photos */}
      </Grid>
    </Box>
  );
}

export default TopBar;
