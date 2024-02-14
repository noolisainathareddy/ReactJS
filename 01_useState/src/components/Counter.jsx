import { useState } from "react";
import "../components/Counter.css";

const Counter = () => {
    const[value, setValue] = useState(0);

    const addValue = () => {
        setValue(value + 1);    
    }
    
    const removeValue = () => {
        setValue(value - 1);
    }
    return(
        <div>
            <p>This is main heading heading :  {value}</p>
            <button className="btn" onClick={addValue}>Add Value</button>{' '}
            <button className="btn" onClick={removeValue}>Remove Value</button>
        </div>
    )
}

export default Counter;