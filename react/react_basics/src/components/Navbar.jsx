import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";

export default function NavBar() {
    const { theme } = useContext(ThemeContext);

    return (
        <nav
            className="NavBar"
            style={{
                backgroundColor: theme.background,
                color: theme.foreground,
            }}
        >
            <ul className="menu">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dash">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/posts">Posts</NavLink>
                </li>
            </ul>{" "}
            {/* ++ Add another page with route and component */}
        </nav>
    );
}
