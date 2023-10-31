import React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import MainComponent from './MainComponent/MainComponent';
import MainManu from './Menu/MainMenu';

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
      <AppBar position="static" className="appBar">
        <Toolbar>
          <Typography variant="h5" style={{ flexGrow: 1, fontWeight: 'bold', color: 'rgb(57,57,57)', WebkitTextStroke: '0.3px white' }}>
            검정관측소
          </Typography>
        </Toolbar>
      </AppBar>
      <MainManu>

      </MainManu>
      <MainComponent>

      </MainComponent>
    </div>
  );
}

export default App;