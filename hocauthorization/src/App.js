import React,{useEffect, useState} from 'react';
import axios from 'axios';
 
const App = () => {
  const[data,setData] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8080/v2/getall").then(response => {
      setData(response.data);
      console.log("Printing data");
      console.log(response.data);
    })
  },[])
  console.log("Called API")
  return(
    <div>
      <center>
        <h1> Welcome User</h1>
        {console.log(data)}
        {data.map(item => <li key={item.id && item.emailId}>{item.name}</li>)}
      </center>
    </div>
  )
}

export default App;