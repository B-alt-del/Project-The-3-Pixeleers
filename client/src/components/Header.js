import {NavLink} from "react-router-dom";
// import { User } from "../../../server/models";

function HeaderBar(props) {
    return (
        <header >
            <h1 >{props.logo}</h1>

            <NavLink to="/">Home</NavLink>
            <NavLink to="/create">Create</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/about">About</NavLink>

        </header >
    );
};

export default HeaderBar;
