import { Redirect, Route, Switch } from "react-router-dom";
import Clubs from "../../HomeArea/Clubs/Clubs";
import Goals from "../../HomeArea/Goals/Goals";
import Main from "../../HomeArea/Main/Main";
import AllClubs from "../../MenuArea/AllClubs/AllClubs";
import AllTimeGoals from "../../MenuArea/AllTimeGoals/AllTimeGoals";
import Titles from "../../MenuArea/Titles/Titles";
import Page404 from "../../SharedArea/Page404/Page404";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Switch>
                <Route path='/home' component={Main} exact/>  
                <Route path='/goals' component={AllTimeGoals} exact/>
                <Route path='/titles' component={Titles} exact/>
                <Route path='/clubs' component={AllClubs} exact/>
                <Redirect from='/' to='home' exact/>
                <Route component={Page404}/> {/* Last */}
            </Switch>
        </div>
    );
}

export default Routing;
