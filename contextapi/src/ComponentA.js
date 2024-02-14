import React,{useContext} from 'react';
import {store} from './App';

const ComponentA = () => {
    const [data,setData] = useContext(store); 
    return(
        <div>
            <center>
                Component A {data}
            </center>
        </div>
    )
}

export default ComponentA;