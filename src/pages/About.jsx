import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function About() {

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m:"auto",
          width: 450,
          height: 500,
          justifyContent:"center",
          alignItems:"center",
          mt:4,
          mb:30
        },
      }}
    >
      
      <Paper elevation={20} sx={{
       
        flexWrap: 'wrap',
        '& > :not(style)': {
          m:"auto",
         
          justifyContent:"center",
          alignItems:"center",
          mt:4,
         
        },
      }}>
      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 ,ml:2,width:400,height:100}} />
      <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize:"3rem"
            }}
          >
            LOGO
          </Typography>
          <Typography sx={{textAlign:"center",fontSize:"1.5rem"}}>
            Full Stack Team
          </Typography>
          <Typography sx={{textAlign:"center",gap:2,display:"flex"}}>
            <Typography>< LinkedInIcon
sx={{width:50,height:50}} /></Typography>
            <Typography><TwitterIcon sx={{width:50,height:50}} /></Typography>
            <Typography><InstagramIcon  sx={{width:50,height:50}}/></Typography>
            <Typography><YouTubeIcon  sx={{width:50,height:50}}/></Typography>




          </Typography>
      </Paper>
    </Box>
  );
}
