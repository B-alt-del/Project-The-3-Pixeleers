import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { User } from "../../../server/models";

function HeaderBar(props) {
    return (

    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
                    <h1 >{props.logo}</h1>
                </Typography>
                    <Box mr={2}><NavLink item xs to="/">Home</NavLink></Box> 
                    <Box mr={2}><NavLink item xs to="/create">Create</NavLink></Box> 
                    <Box mr={2}><NavLink item xs to="/login">Login</NavLink></Box> 
                    <Box mr={2}><NavLink item xs to="/about">About</NavLink></Box> 
            </Toolbar>
        </AppBar>
    </Box>
    );
};

export default HeaderBar;
