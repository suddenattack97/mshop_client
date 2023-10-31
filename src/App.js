import React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import MainComponent from './MainComponent/MainComponent';

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="App">
      <AppBar position="static" style={{ backgroundColor: 'rgb(234,193,191)' }}>
        <Toolbar>
        <Typography variant="h5" style={{ flexGrow: 1, fontWeight: 'bold', color: 'rgb(57,57,57)', WebkitTextStroke: '0.3px white' }}>
          Mshop
        </Typography>
          <Button color="inherit" onClick={handleMenu}>메뉴</Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>메뉴 1</MenuItem>
            <MenuItem onClick={handleClose}>메뉴 2</MenuItem>
            <MenuItem onClick={handleClose}>메뉴 3</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <MainComponent>

      </MainComponent>
    </div>
  );
}

export default App;