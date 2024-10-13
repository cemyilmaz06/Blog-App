import Avatar from "@mui/material/Avatar"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import LockIcon from "@mui/icons-material/Lock"

import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import React from "react"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { Form, Formik } from "formik"
import { object, string } from "yup"
import useApiRequest from "../services/useApiRequest"


const Login = () => {
  const {login}=useApiRequest()

  const loginSchma=object({
    email: string().email("Lütfen geçerli email giriniz").required("email zorunludur"),
password: string().required("Şifre zorunludur").min(8, "Şifre en az 8 karakter olmalıdır").max(16, "Şifre en fazla 16 karakter olmaldır").matches(/[a-z]+/, "Şifre en az bir küçük harf içermelidir").matches(/[A-Z]+/, "Şifre en az bir büyük harf içermelidir").matches(/[@$!%*?&/]+/, "Şifre en az bir özel karakter içermelidir"),
  })
  
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
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
              mt:4
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h5"
            align="center"
            mb={4}
            color="secondary.ligh"
          >
            Sign in
          </Typography>
<Formik 
initialValues={{email:"", password:""}}
validationSchema={loginSchma}
onSubmit={(values,actions)=>{
  login(values)

  actions.resetForm()
  actions.setSubmitting()
}}>
{
  ({isSubmitting,handleSubmit,handleBlur,values,touched})=>(
    <Form>
      <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
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
            <Button variant="contained" type="submit">
              SIGN IN
            </Button>
          </Box>
    </Form>
  )}
</Formik>
          

          <Box  sx={{  mt: 2}}>
            <Typography sx={{display:"inline-block"}} >Don't have an account?</Typography><Link to="/register" style={{textDecoration:"none",color:"red"}}> Sign Up</Link>
          </Box>
        </Grid>

       
      </Grid>
    </Container>
  )
}

export default Login
