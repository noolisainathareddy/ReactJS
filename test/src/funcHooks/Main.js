
 import React, {useState} from "react";
import Test from "./Test";
 const Main = () => {
    const [person, setName] = useState('John');
    const [data, setData] = useState({
        title : 'ReactJS',
        source: 'Youtube'
    })

    //De-structing the data
    const {title, source} = data;
    return(
        <div>
            <p>Nmae : {person}</p>
            <p> Learning {data.title} from {data.source}</p>
            <p> Learning {title} from {source}</p>
            <Test title={title} source={source} />
            <Test title={data.title} source={data.source} />
        </div>
    )
 }

 export default Main; 
