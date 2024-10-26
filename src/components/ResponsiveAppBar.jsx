import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import profilePic from '../assets/images/Profile.jpg';

const pages = ['home', 'login', 'register','products'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate();

  const handleMenuOpen = (setAnchorFn) => (event) => {
    setAnchorFn(event.currentTarget);
  };

  const handleMenuClose = (setAnchorFn, path = null) => {
    if (path) navigate(path === 'home' ? '/' : `/${path}`);
    setAnchorFn(null);
  };

  const logoStyles = {
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" noWrap component="a" href="/" sx={{ ...logoStyles, mr: 2, display: { xs: 'none', md: 'flex' } }}>
            MSK
          </Typography>

          {/* Mobile Menu Icon */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleMenuOpen(setAnchorElNav)} color="inherit" aria-label="open menu">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={() => handleMenuClose(setAnchorElNav)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleMenuClose(setAnchorElNav, page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography variant="h5" noWrap component="a" href="/" sx={{ ...logoStyles, mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            MSK
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={() => handleMenuClose(setAnchorElNav, page)} sx={{ my: 2, color: 'white', display: 'block' }}>
                {page}
              </Button>
            ))}
          </Box>

          {/* User Settings */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleMenuOpen(setAnchorElUser)} sx={{ p: 0 }} aria-label="user settings">
                <Avatar alt="User Profile Picture" src={profilePic} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={() => handleMenuClose(setAnchorElUser)}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleMenuClose(setAnchorElUser)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
