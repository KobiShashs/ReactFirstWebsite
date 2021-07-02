import { Component, SyntheticEvent } from "react";
import "./Search.css";

interface SearchState {
	txt:string;
}

class Search extends Component<{}, SearchState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
			txt:''
        };
    }


    private setValue = (args: SyntheticEvent)=>{
        //args - information about the event;
        //args.target - the tag that raised the event
        const value = (args.target as HTMLInputElement).value;
        this.setState({txt:value});
    }

    private clearValue = (args:SyntheticEvent) => {
        this.setState({txt:''});
    }

    public render(): JSX.Element {
        return (
            <div className="Search Box">
                <h2>Two way Binding</h2>
				<input type="text"
                       onChange={this.setValue}
                       value={this.state.txt}/>

                       <span>{this.state.txt}</span>
                       <button onClick={this.clearValue}>Clear</button>
            </div>
        );
    }
}

export default Search;
