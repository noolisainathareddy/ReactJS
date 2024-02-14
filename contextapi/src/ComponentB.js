import React,{useContext} from 'react';
import {store} from  './App';

const ComponentB = () => {
    const [data,setData] = useContext(store); 
    return(
        <div>
            <center>
                Component B {data}
            </center>
        </div>
    )
}

export default ComponentB;