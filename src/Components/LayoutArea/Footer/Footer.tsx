import { Component } from "react";
import "./Footer.css";

// function Footer(): JSX.Element {
//     return (
//         <div className="Footer">
// 			<p>All rights reserved to&nbsp;<a href="http://johnbryce.co.il">John Bryce Trining LTD</a>&copy;</p>
//         </div>
//     );
// }

class Footer extends Component {
    public render():JSX.Element {
        return (
            <div className="Footer">
 			<p>All rights reserved to&nbsp;<a href="http://johnbryce.co.il">John Bryce Trining LTD</a>&copy;</p>
         </div>
        );
    }
}

export default Footer;
