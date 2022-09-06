import * as React from 'react';
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Fade from '@mui/material/Fade'
import MenuItem from '@mui/material/MenuItem';
import logo from "./logos/water-dragon.png"
// import { User } from "../../../server/models";

function HeaderBar(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="relative" style={{ background: '#2E3B55' }}>
                <Toolbar >
                    <Box
                        component="img"
                        sx={{ height: 54 }}
                        alt="Logo"
                        src={logo}
                    />
                    <Typography variant="h8" component="div" sx={{ flexGrow: 0.95 }}>
                        <h1 >{props.logo}</h1>
                    </Typography>
                    <Button
                        id="fade-button"
                        size="large"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    ><MenuIcon />
                    </Button>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        TransitionComponent={Fade}
                    >
                        <MenuItem><NavLink to="/" style={isActive => ({
                            color: isActive ? "#bd4250" : "Black", textDecoration: "none"
                        })}>Home</NavLink></MenuItem>
                        <MenuItem><NavLink to="/create" style={isActive => ({
                            color: isActive ? "#bd4250" : "Black", textDecoration: "none"
                        })}>Create</NavLink></MenuItem>
                        <MenuItem><NavLink to="/login" style={isActive => ({
                            color: isActive ? "#bd4250" : "Black", textDecoration: "none"
                        })}>Login</NavLink></MenuItem>
                        <MenuItem><NavLink to="/about" style={isActive => ({
                            color: isActive ? "#bd4250" : "Black", textDecoration: "none"
                        })}>About</NavLink></MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default HeaderBar;
