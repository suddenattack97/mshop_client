import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function MainManu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleMenu}>BEST</Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>메뉴 1</MenuItem>
        <MenuItem onClick={handleClose}>메뉴 2</MenuItem>
        <MenuItem onClick={handleClose}>메뉴 3</MenuItem>
      </Menu>
      {/* Add your Slider component or other content here */}
      <Button color="inherit" onClick={handleMenu}>NEW</Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>메뉴 1</MenuItem>
        <MenuItem onClick={handleClose}>메뉴 2</MenuItem>
        <MenuItem onClick={handleClose}>메뉴 3</MenuItem>
      </Menu>
      {/* Add your Slider component or other content here */}
      <Button color="inherit" onClick={handleMenu}>프리미엄</Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>메뉴 1</MenuItem>
        <MenuItem onClick={handleClose}>메뉴 2</MenuItem>
        <MenuItem onClick={handleClose}>메뉴 3</MenuItem>
      </Menu>
      {/* Add your Slider component or other content here */}
      <Button color="inherit" onClick={handleMenu}>오늘출발</Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>메뉴 1</MenuItem>
        <MenuItem onClick={handleClose}>메뉴 2</MenuItem>
        <MenuItem onClick={handleClose}>메뉴 3</MenuItem>
      </Menu>
      {/* Add your Slider component or other content here */}
    </div>
  );
}

export default MainManu;
