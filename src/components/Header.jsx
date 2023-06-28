import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EditLoginDialog from './dialogs/EditLoginDialog';
import DeactivateDialog from './dialogs/DeactivateDialog';
import ReactivateDialog from './dialogs/ReactivateDialog';

function Header() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const [deactivateDialogOpen, setDeactivateDialogOpen] = useState(false);
  const [reactivateDialogOpen, setReactivateDialogOpen] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickLogin = () => {
    handleCloseUserMenu();
    setLoginDialogOpen(true);
  }

  const handleClickDeactivate = () => {
    handleCloseUserMenu();
    setDeactivateDialogOpen(true);
  }

  const handleClickReactivate = () => {
    handleCloseUserMenu();
    setReactivateDialogOpen(true);
  }

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <AirplanemodeActiveIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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
                Airlines
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, color: 'white' }}>
                  <AccountCircle />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
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
                <MenuItem onClick={handleClickLogin}>
                  <Typography textAlign="center">
                    Login
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClickDeactivate}>
                  <Typography textAlign="center">
                    Deactivate
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClickReactivate}>
                  <Typography textAlign="center">
                    Reactivate
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <EditLoginDialog
        open={loginDialogOpen}
        onClose={() => setLoginDialogOpen(false)}
      />
      <DeactivateDialog
        open={deactivateDialogOpen}
        onClose={() => setDeactivateDialogOpen(false)}
      />
      <ReactivateDialog
        open={reactivateDialogOpen}
        onClose={() => setReactivateDialogOpen(false)}
      />
    </>
  );
}
export default Header;
