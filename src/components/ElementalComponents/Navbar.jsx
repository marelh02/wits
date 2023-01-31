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
import { Link } from 'react-router-dom';

import logo from "../../res/logo.png";
import { Stack } from '@mui/system';
import { witsisLoged } from '../witsUserSession';


const pages = [{ name: "Découvrire", link: "articles" },
{ name: "Mes articles", link: "mes_articles" },
{ name: "Rédiger", link: "rediger" }];

const settings = ['Account', 'Logout'];
const dim = 50;

export default function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{
        bgcolor: '#D3D3D3'
      }}>
        <Toolbar disableGutters>
          <a href="/"><img src={logo} width={dim} height={dim} /></a>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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
            Wits
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              // <Link to={`/${page.link}`}>                
              // </Link>
              <Button
                key={page.name}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={Link} to={`/${page.link}`}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {
            witsisLoged()
            ?
            <Box>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="user" />
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          :
          <Stack direction="row" spacing={1}>
              <Button variant="outlined" color="inherit" component={Link} to="signin">Sign in</Button>
              <Button variant="contained" color="inherit" component={Link} to="signup">Sign up</Button>
            </Stack>
          
          }

        </Toolbar>
      </Container>
    </AppBar>
  );
}
