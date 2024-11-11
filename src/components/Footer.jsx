import { AppBar, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <AppBar position="static" sx={{display:"flex",justifyContent:"space-between"}}>
    <Typography sx={{display:"flex",flexDirection:"column",textAlign:"center",backgroundColor:"primary.main",justifyContent:"center",alignItem:"center",p:2}}>
   <Typography>
    Developed by FS Team
   </Typography>
   <Typography>
   Copyright © <span>Logo</span> 2024
   </Typography>

  </Typography>
  </AppBar>
    )
}

export default Footer