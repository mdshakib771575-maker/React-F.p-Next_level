import { use } from "react";
import "./Style.css"
import { CounterContext } from "../provider/Counter_provider";
const NestedDis = () => {
    const {count}=use(CounterContext)
    return (
        <div className="style">
            <h2>this is nested</h2>
            <h1>{count}</h1>
        </div>
    );
};

export default NestedDis;