import Clubs from "../Clubs/Clubs";
import Goals from "../Goals/Goals";
import Sales from "../Sales/Sales";
import Total from "../Total/Total";
import Workout from "../Workout/Workout";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
            {/* <h1>Best Player in the world</h1>
           
            <img src="https://media.giphy.com/media/TjAcxImn74uoDYVxFl/giphy.gif"/> */}

            {/* Interpolation */}
            <Total/>

            {/* Conditional Rendering */}
            <Workout/>

            {/* Displaying List */}
            <Clubs/>

            <h2>Goals History</h2>
            {/* Props */}
            {/* <img src="http://imge1.com" alt="Moshe 1" />
            <img src="http://imge2.com" alt="Moshe 2" /> */}
            <Goals team="Barcelona" goals={500}/>
            <Goals team="Barcelona A" goals={135}/>

            {/* Props */}
            <Sales category="shows" percent={20}/>
            <Sales percent={20}/>
    
           
        </div>
    );
}

export default Main;
