import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';




export default function NewBlog() {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },width:400 ,height:500, boxShadow: 'rgba(0, 0, 0, 0.87) 24px 12px 12px 12px',textAlign:"center",justifyContent:"center",display:"flex",alignItem:"center",m:"auto",mt:3,mb:30}}
      noValidate
      autoComplete="off"
    >
      <div>
     
      <TextField fullWidth label="Title*" id="fullWidth" />
   
      <TextField fullWidth label="Image URL*" id="fullWidth" />
      <TextField select label="Category*" id="fullWidth"><MenuItem >Please Choose...
             
            </MenuItem></TextField>
   
      
        </div>
        </Box>
       ) }