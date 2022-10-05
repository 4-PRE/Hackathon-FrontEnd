import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Question: NextPage = () => {
  return (
    <main>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">어쩌구</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="네" control={<Radio />} label="Female" />
          <FormControlLabel value="아니요" control={<Radio />} label="Male" />
        </RadioGroup>

        <FormLabel id="demo-row-radio-buttons-group-label2">어쩌구</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label2"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="네" control={<Radio />} label="Female" />
          <FormControlLabel value="아니요" control={<Radio />} label="Male" />
        </RadioGroup>

        <FormLabel id="demo-row-radio-buttons-group-label3">어쩌구</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label3"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="네" control={<Radio />} label="Female" />
          <FormControlLabel value="아니요" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
    </main>
  );
};

export default Question;
