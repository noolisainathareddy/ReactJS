import React, {useState} from 'react';

const FunState = () => {
    const[data,setData] = useState({
        name:'Sai Nooli',
        age: 26
    });
    return(
        <div>
            <center>
                <p>This is from function state prac {data.name}</p>
            </center>
        </div>
    )
}

export default FunState;