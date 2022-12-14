import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Menu } from '@material-ui/icons';

export default function AppBarComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor:'#fff', height:'12%' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography style={{ color: '#444444', textAlign:'center', marginLeft:'40%', fontFamily: 'Segoe UI SemiBold', fontSize:'40px' }}>
            Floor Walk
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
