import React,{useState} from 'react'; 
import axios from 'axios';


const App = () => {
  const [data,setData] = useState({
    id: '',
    emailId: '',
    name: '',
    age: '',
    place:'',
    zipcode:''
  })

  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value});
    console.log("logging data");
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log("Submitting data to save");
    console.log(data.id);
    console.log(data.emailId);
    console.log(data.name);
    console.log(data.age);
    console.log(data.place);
    console.log(data.zipcode);
    const url="http://localhost:8080/v2/add";
    axios.post(url,{
      "userKey": {
        "id": data.id,
        "emailId": data.emailId
    },
    "name": data.name,
    "age": data.age,
    "place": data.place,
    "zipcode": data.zipcode   
    });
  }
  return(
    <div>
        <center>
          <h1>Please fill below details!</h1>
          <form onSubmit={submitHandler}>
            <label>Id : </label> <br />
            <input type="text" name="id"  value = {data.id} onChange={changeHandler} /> <br />
            <label>EmailId : </label> <br />
            <input type="text" name="emailId" value = {data.emailId} onChange={changeHandler} /> <br />
            <label>Name : </label> <br />
            <input type="text" name="name" value = {data.name} onChange={changeHandler} /> <br />
            <label>Age : </label> <br />
            <input type="text" name="age" value = {data.age} onChange={changeHandler}/> <br />
            <label>Place : </label> <br />
            <input type="text" name="place" value = {data.place} onChange={changeHandler} /> <br />
            <label>ZipCode : </label> <br />
            <input type="text" name="zipcode" value = {data.zipcode} onChange={changeHandler} /> <br />
            <input type="submit" value="Post Data"/> 
          </form>
        </center>
    </div>
  )
}

export default App; 