import Avatar from "@mui/material/Avatar"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import LockIcon from "@mui/icons-material/Lock"
import image from "../assets/result.svg"
import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Button } from "@mui/material"
import {Formik,Form} from "formik"
import {object,string} from "yup"
import useApiRequests from "../services/useApiRequest"



const Login = () => {
  const{login}=useApiRequests()
  const loginSchema=object({
email: string().email("Lütfen geçerli email giriniz").required("email zorunludur"),
password: string().required("Şifre zorunludur").min(8, "Şifre en az 8 karakter olmalıdır").max(16, "Şifre en fazla 16 karakter olmaldır").matches(/[a-z]+/, "Şifre en az bir küçük harf içermelidir").matches(/[A-Z]+/, "Şifre en az bir büyük harf içermelidir").matches(/[@$!%*?&/]+/, "Şifre en az bir özel karakter içermelidir"),
  })
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
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>
<Formik
initialValues={{email:"",password:""}}
validationSchema={loginSchema}
onSubmit={(values,actions)=>{
login(values)


actions.resetForm()
actions.setSubmitting(false)
  
}}>
  {({isSubmitting,handleChange,handleBlur,values,touched,errors})=>(
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Email"
              name="email"
              id="email"
              type="email"
              variant="outlined"
              onChange={handleChange}
              value={values.email}
              error={touched.email && Boolean(errors.email)}
              onBlur={handleBlur}
              helperText={errors.email}
            />
            <TextField
              label="password"
              name="password"
              id="password"
              type="password"
              variant="outlined"
              onChange={handleChange}
              value={values.password}
              error={touched.password && Boolean(errors.password)}
              onBlur={handleBlur}
              helperText={errors.password}
            />
            <Button variant="contained" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Box></Form>
  )}
  

</Formik>
          
<Box sx={{  mt: 2 }}>
            <Typography sx={{display:"inline-block"}}>Already have an account?</Typography><Link to="/register" style={{textDecoration:"none",color:"red"}}> Sign in</Link>
          </Box>
        </Grid>

        
      </Grid>
    </Container>
  )
}

export default Login
