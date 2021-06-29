import { Component } from "react";
import "./BestClub.css";

interface ClubState{
    team: string;
}
class BestClub extends Component<{},ClubState> {

    // private team = 'aaa';
    public constructor(state: ClubState) {
        super(state);
        this.state = {team : 'aaa'};// Initializing State
    }


    private showBestTeam = ()=>{

        this.setState({'team':'bbb'});
       // this.team ='bbb';
        alert(this.state.team);
    }

    public render(): JSX.Element {
        return (
            <div className="BestClub Box">
                <h2>State</h2>
				<button onClick={this.showBestTeam}>Yalla</button>
                <span>{this.state.team}</span>
            </div>
        );
    }
}

export default BestClub;
