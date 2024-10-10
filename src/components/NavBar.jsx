import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { AppBar, Box } from '@mui/material';

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
            
          >DASHBOARD
            
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
            
          >NEW BLOG
            
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
            
          >ABOUT
            
          </Typography>
          </Box>

          
       
        
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton >
                <Avatar alt="Remy Sharp" src="" />
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
  


