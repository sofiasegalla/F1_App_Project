import React from "react";
import { Box, TextField, Typography, Stack, Divider } from "@mui/material";

function RightBar() {
  return (
    <Box
      sx={{
        height: "100vh",
        color: "#FFF9E8",
        padding: "20px", // Add some padding for spacing
      }}
    >
      <Stack spacing={2}>
        <TextField
          placeholder="Search"
          inputProps={{ style: { color: "#FFF9E8" } }}
          variant="outlined"
          fullWidth
          sx={{
            borderRadius: 50,
            "& fieldset": {
              borderRadius: 50,
              borderWidth: 1,
              //borderColor: "#FFF9E8",
              backgroundColor: "#68605F",
              opacity: 0.6,
            },
            height: 40,
            marginBottom: "20px", // Add margin bottom for spacing
          }}
        />
        <Divider sx={{ backgroundColor: "transparent", height: "10px" }} /> {/* Add a divider with height */}
        <Box
          sx={{
            border: "1px solid #4B4645",
            borderRadius: "8px",
            padding: "10px",
            backgroundColor: "#4B4645", // Change background color
          }}
        >
          <Typography variant="h6" sx={{ color: "#FFF9E8", marginBottom: "10px", fontWeight: "bold"}}>
            Trending
          </Typography>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: "5px" }}>
              <Typography variant="body1" sx={{ color: "#FFF9E8" }}>
                #Topic1
              </Typography>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <Typography variant="body1" sx={{ color: "#FFF9E8" }}>
                #Topic2
              </Typography>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <Typography variant="body1" sx={{ color: "#FFF9E8" }}>
                #Topic3
              </Typography>
            </li>
            <li style={{ marginBottom: "5px" }}>
              <Typography variant="body1" sx={{ color: "#FF4545" }}>
                Show More
              </Typography>
            </li>
          </ul>
        </Box>
      </Stack>
    </Box>
  );
}

export default RightBar;
