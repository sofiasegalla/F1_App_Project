import React from "react";
import { Box, TextField, Typography, Stack } from "@mui/material";

function RightBar() {
  return (
    <Box sx={{ height: "100vh", color: "#FFF9E8" }}>
      <Stack spacing={2}>
        <TextField
          placeholder="Search Empire"
          variant="outlined"
          fullWidth
          sx={{
            borderRadius: 50,
            "& fieldset": { borderRadius: 50 },
            height: 40,
          }}
        />
        <Box>
          <Typography variant="h6">Trending</Typography>
          <ul>
            <li>#Topic1</li>
            <li>#Topic2</li>
            <li>#Topic3</li>
          </ul>
        </Box>
      </Stack>
    </Box>
  );
}

export default RightBar;
