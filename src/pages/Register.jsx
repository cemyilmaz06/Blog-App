import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import LockIcon from "@mui/icons-material/Lock"

import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import React from "react"
import TextField from "@mui/material/TextField"
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"


const Register = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault()};
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
      

        <Grid item xs={12} sm={10} md={4}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Sign Up
          </Typography>

          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="User Name"
              name="username"
              id="userName"
              type="text"
              variant="outlined"
            />
            <TextField
              label="First Name"
              name="first_name"
              id="firstName"
              type="text"
              variant="outlined"
            />
            <TextField
              label="Last Name"
              name="last_name"
              id="last_name"
              type="text"
              variant="outlined"
            />
            <TextField
              label="Email"
              name="email"
              id="email"
              type="email"
              variant="outlined"
            />
                 <FormControl  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
              
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
            <Button type="submit" variant="contained" size="large">
              Sign Up
            </Button>
          </Box>

          <Box sx={{  mt: 2 }}>
            <Typography sx={{display:"inline-block"}}>Already have an account?</Typography><Link to="/" style={{textDecoration:"none",color:"red"}}> Sign in</Link>
          </Box>
        </Grid>

        </Grid>
     
   </Container>
  )
}


export default Register
