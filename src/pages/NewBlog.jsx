import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, MenuItem, Typography } from "@mui/material";

const currencies = [
  {
    label: "Please Choose...",
  },
  {
    label: "Draft",
  },
  {
    label: "Published",
  },
];

export default function NewBlog() {
  const [blog, setBlog] = React.useState();

  const handleChange = (e) => {
    setBlog(e.target.value);
    console.log(blog);
  };

  // const handleSubmit()=>{
  //   e.prevent.default()
  // }
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "45ch" },
        width: 400,
        height: 520,
        boxShadow: "rgba(0, 0, 0, 0.87) 24px 12px 12px 12px",
        m: "auto",
        mt: 3,
        mb: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
      // onSubmit={handleSubmit}
    >
      <Typography
        sx={{
          color: "secondary.main",
          fontSize: "2rem",
          fontWeight: 600,
          ml: 1,
          paddingTop: 5,
        }}
      >
        New Blog
      </Typography>

      <TextField
        fullWidth
        label="Title*"
        id="fullWidth"
        onChange={handleChange}
      />

      <TextField fullWidth label="Image URL*" id="fullWidth" />
      <TextField select label="Category*" id="fullWidth">
        <MenuItem>Please Choose...</MenuItem>
      </TextField>
      <TextField select label="Status*" onChange={handleChange}>
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="outlined-textarea"
        label="Content*"
        onChange={handleChange}
      />

      <Button sx={{ width: 350, mt: 2, mb: 3 }} variant="contained">
        NEW BLOG
      </Button>
    </Box>
  );
}
