import "./Sales.css";

interface SalesProps{
    category?:string;
    percent:number;
}
function Sales(props:SalesProps): JSX.Element {
    return (
        <div className="Sales">
			<h2>Sale</h2>
            <span> Only now! all {props.category || 'items'} with discount of {props.percent}% Woho! </span>
        </div>
    );
}

export default Sales;
