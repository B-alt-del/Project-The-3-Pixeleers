import {NavLink} from "react-router-dom";

function HeaderBar(props) {
    return (
        <header >
            <h1 >{props.title}</h1>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/create">Create</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/about">About</NavLink>

            <h1 >{props.logo}</h1>
        </header >
    );
};

export default HeaderBar;
