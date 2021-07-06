import { Component, SyntheticEvent } from "react";
import "./TheBest.css";

// function TheBest(): JSX.Element {
//     function showTheBest(){
//         alert('Messi');
//     }
//     return (
//         <div className="TheBest Box">
// 			<button onClick={showTheBest}>Yalla</button>
//         </div>
//     );
// }

class TheBest extends Component {

    private player = 'Messi';
    private showTheBest =(args:SyntheticEvent)=>{ alert(this.player);}
    public render():JSX.Element {
        return (
            <div className="TheBest Box">
                <h2>Events</h2>

             			<button onClick={this.showTheBest}>Yalla</button>
                     </div> 
        );
    }
}

export default TheBest;
