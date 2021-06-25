import "./Total.css";

function Total(): JSX.Element {
    const numOfGoals = 774;
    return (
        <div className="Total Box">
			<h2>Total</h2>
            <span>Messi scored {numOfGoals} goals so far</span>
        </div>
    );
}

export default Total;
