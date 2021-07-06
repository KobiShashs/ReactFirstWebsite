import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            
            {/* <a href="/home">Home</a>
            <br />
			<a href="/clubs">Clubs</a>
            <br />
            <a href="/goals">Goals</a>
            <br/>
            <a href="/titles">Titles</a> */}

            <NavLink to="/home">Home</NavLink>
            <NavLink to="/clubs">Clubs</NavLink>
            <NavLink to="/goals">Goals</NavLink>
            <NavLink to="/titles">titles</NavLink>
        </div>
    );
}

export default Menu;
