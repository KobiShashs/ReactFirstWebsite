import "./Total.css";

function Total(): JSX.Element {
    const numOfGoals = 774;
    return (
        <div className="Total Gilad">
			<div className="div1"><h2>Total</h2></div>
            <div className="div3"> <span>Messi scored {numOfGoals} goals so far</span></div>
        </div>
    );
}

export default Total;
