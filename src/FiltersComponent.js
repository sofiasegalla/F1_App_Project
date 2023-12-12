import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledFormControl = styled(FormControl)({
  backgroundColor: "#4B4645", // Replace with your actual background color
  color: "white",
  padding: "20px", // Adjust padding as needed
  borderRadius: "8px",
  boxSizing: "border-box",
  width: "100%", // Set to use full width of the parent/container
});

const StyledFormLabel = styled(FormLabel)({
  textAlign: "left", // Aligns the text to the left
  paddingLeft: "4px", // Adjust the padding to align with the radio buttons
  fontSize: "1.2rem",
  marginBottom: "10px", // Adds space below the label
  marginTop: "20px", // Moves the label down by 20px
});

const CustomRadio = styled(Radio)({
  color: "white",
  "&.Mui-checked": {
    color: "white",
  },
});

const FiltersComponent = () => {
  const [selectedValue, setSelectedValue] = useState("following");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <StyledFormControl component="fieldset">
      <Typography
        variant="h6"
        sx={{ color: "#FFF9E8", marginBottom: "10px", fontWeight: "bold" }}
      >
        Filters
      </Typography>
      <RadioGroup value={selectedValue} onChange={handleChange}>
        <FormControlLabel
          value="following"
          control={<CustomRadio />}
          label="Following Only"
        />
        <FormControlLabel
          value="all"
          control={<CustomRadio />}
          label="All Users"
        />
        <FormControlLabel
          value="verified"
          control={<CustomRadio />}
          label="Verified Users"
        />
        <FormControlLabel
          value="verified_plus"
          control={<CustomRadio />}
          label="Verified Plus Users"
        />
      </RadioGroup>
    </StyledFormControl>
  );
};

export default FiltersComponent;
