import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import LockIcon from "@mui/icons-material/Lock"
import { Formik } from "formik"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

import { Link } from "react-router-dom"
import React from "react"
import RegisterForm, { registerSchema } from "../components/auth/RegisterForm"
import useApiRequest from "../services/useApiRequest"


const Register = () => {

  const {register}=useApiRequest()
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
          <Formik initialValues={{
            username:"",
            firstName:"",
            lastName:"",
            email:"",
            password:"",
}}
validationSchema={registerSchema}
onSubmit={(values, actions)=>{
  register(values)
  actions.resetForm()
  actions.setSubmitting(false)
}}
component={(props)=> <RegisterForm {...props}/>}>
            

          </Formik>

        
        

          <Box sx={{  mt: 2 }}>
            <Typography sx={{display:"inline-block"}}>Already have an account?</Typography><Link to="/" style={{textDecoration:"none",color:"red"}}> Sign in</Link>
          </Box>
        </Grid>

        </Grid>
     
   </Container>
  )
}


export default Register
