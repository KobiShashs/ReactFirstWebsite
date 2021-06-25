import "./Workout.css";

function Workout(): JSX.Element {
    return (
        
        <div className="Workout Box">
            <h2>Workout</h2>
			<span>{isSummer()?"Swimming & Matkot": isWinter()?"Running in the gym":"trx and meditation"}</span>
        </div>
    );

    function isWinter():boolean {
        const date = new Date();
        const month = date.getMonth() +1;
        console.log(month);
        return month===12 || month===1 || month===2;
    }

    function isSummer():boolean {
        const date = new Date();
        const month = date.getMonth() + 1;
        return 6<=month && month<=8;
    }
}

export default Workout;
