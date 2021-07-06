import BestClub from "../BestClub/BestClub";
import Clock from "../Clock/Clock";
import Clubs from "../Clubs/Clubs";
import ContactUs from "../ContactUs/ContactUs";
import Goals from "../Goals/Goals";
import MUI from "../MUI/MUI";
import Sales from "../Sales/Sales";
import Search from "../Search/Search";
import TheBest from "../TheBest/TheBest";
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
          
        
            <Goals team="Barcelona" goals={500}/>
            <Goals team="Barcelona A" goals={135}/>

            {/* Props */}
            <Sales category="shows" percent={20}/>
            <Sales percent={20}/>

            {/* Events */}
            <TheBest/>

            {/* Events */}
            <BestClub/>

            {/* Two Way Binding */}
            <Search/>

            {/* Lifecycle Hooks */}
            <Clock/>

            {/* MUI */}
            <ContactUs/>

            <MUI/>
    
           
        </div>
    );
}

export default Main;
