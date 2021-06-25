import "./Goals.css";

interface DetailsProps{
    team: string,
    goals: number
}

function Goals(props: DetailsProps): JSX.Element {
    return (
         <div className="Goals Box2">
            <span>In {props.team} he scored {props.goals}</span>
         </div>
    );
}

export default Goals;
