import Logo from "../Logo/Logo";
import "./Header.css";
import Marquee from "react-fast-marquee";

function Header(): JSX.Element {
    return (
        <div className="Header">
			<h1>Leo Messi The King</h1>
            <Logo/>
        </div>
    );
}

export default Header;
