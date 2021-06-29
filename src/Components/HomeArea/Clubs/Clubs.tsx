import "./Clubs.css";

function Clubs(): JSX.Element {
    // const teams = ['Newell\'s Old Boys','Barcelona Youth','Barcelona C','Barcelona B','Barcelona'];
    const teams = [
        {"id":1,"name":'Newell\'s Old Boys'},
        {"id":2,"name":'Barcelona Youth'},
        {"id":3,"name":'Barcelona C'},
        {"id":4,"name":'Barcelona B'},
        {"id":5,"name":"Barcelona"}
    ];
    return (
        <div className="Clubs Box">
			<h2>Clubs</h2>
            {/* Step 1 : Hard Coded */}
            {/* <span>Newell's Old Boys</span>,
            <span>Barcelona Youth</span>,
            <span>Barcelona C</span>,
            <span>Barcelona B</span>,
            <span>Barcelona</span> */}
           
           {/* Step 2 - Reading from an array */}
           {/* {teams.map(team =><span>{team},</span>)} */}
           {/* Step 3 - Reading from an array of Objects */}
           {/* {teams.map(team =><span>&nbsp;{team.name}&nbsp;|</span>)} */}
           {/* Step 4 - Reading from an array of Objects and provide unique prop. id for React DOM  */}
           {/* {teams.map(team =><span key={team.id}>&nbsp;{team.name}&nbsp;|</span>)} */}
           {/* Step 5 - Add a , separator */}
           {teams.map((team,idx) =><span key={team.id}>{(idx?' | ':'')}{team.name}</span>)}
        
        </div>
    );
}

export default Clubs;
