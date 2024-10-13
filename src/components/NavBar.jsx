import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';


import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { AppBar, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
<AppBar position="static"  >
     
        <Toolbar disableGutters sx={{display:"flex" ,justifyContent:"space-between"}}>
          <Box display={"flex"}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
             
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 400,
           
              color: 'inherit',
              textDecoration: 'none',
              m:2
            }}
            
          ><Link to="/dashboard" style={{textDecoration:"none",color:"black"}}>DASHBOARD</Link>
            
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
             
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 400,
           
              color: 'inherit',
              textDecoration: 'none',
              m:2
            }}
            
          ><Link to="/newblog" style={{textDecoration:"none",color:"black"}}>NEW BLOG</Link>
            
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
             
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 400,
           
              color: 'inherit',
              textDecoration: 'none',
              m:2
            }}
            
          ><Link to="/about" style={{textDecoration:"none",color:"black"}}>ABOUT</Link>
            
          </Typography>
          </Box>

          
       
        
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton >
              <Link to="/" ><Avatar alt="Remy Sharp" src="" /></Link> 
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
           
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              
            >
              
                <MenuItem  >
                  <Typography sx={{ textAlign: 'center' }}></Typography>
                </MenuItem>
          
            </Menu>
          </Box>
        </Toolbar>
    
    </AppBar>
  );
}
export default NavBar;
  


