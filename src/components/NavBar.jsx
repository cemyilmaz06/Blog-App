import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
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
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useApiRequest from '../services/useApiRequest';

const pages = ['DASHBOARD', 'NEW BLOG', 'ABOUT'];
const settings = ['My Blogs', 'Profile', 'Logout'];

function ResponsiveAppBar() {
  const{logout}=useApiRequest()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
const{username}=useSelector((state)=>state.auth)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{display:"flex",justifyContent:"space-between"}}>
   
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 ,ml:2}} />
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
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
         
              <Button
               
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><Link to=""  style={{textDecoration:"none",color:"white"}}>DASHBOARD</Link>
            
              </Button>
              <Button
          
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Link to="/newblog" style={{textDecoration:"none",color:"white"}}>NEW BLOG</Link>
              </Button>
              <Button
              
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><Link to="/about"  style={{textDecoration:"none",color:"white"}}>ABOUT</Link>
              
              </Button>
      
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 ,mr:2}}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
         {username ? (<MenuItem  onClick={handleCloseUserMenu} sx={{display:"flex",flexDirection:"column",gap:1,alignItems:"flex-start"}}>
              
                  <Typography sx={{ textAlign: 'center' }}><Link to="/myblogs" style={{textDecoration:"none",color:"black"}}>My Blogs</Link></Typography>
                  <Typography sx={{ textAlign: 'center' }}><Link to="/profile" style={{textDecoration:"none",color:"black"}}>Profile</Link></Typography>
                  <Typography sx={{ textAlign: 'center' }}><Link to="/auth" style={{textDecoration:"none",color:"black"}} onClick={logout}>Logout</Link></Typography>
                </MenuItem>) : (<MenuItem  onClick={handleCloseUserMenu} sx={{display:"flex",flexDirection:"column",gap:1,alignItems:"flex-start"}}>
              
              
              <Typography sx={{ textAlign: 'center' }}><Link to="/auth" style={{textDecoration:"none",color:"black"}}>Login</Link></Typography>
            </MenuItem> )}
                
            
            </Menu>
          </Box>
        </Toolbar>
     
    </AppBar>
  );
}
export default ResponsiveAppBar;
