import React,{useState} from 'react';

const OnSubmit = () => {
    const [data,setData] = useState({
        email: '',
        password: ''
    })
    const onChangeHandler = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const onSubmitHandler = (e) =>{
        e.preventDefault(); 
        console.log("Valves got saved"); 
        if(data.password.length < 5){
            alert("Provide password lentgth greater than 5 char");
        }
    }
    return(
        <div>
            <center>
                <form onSubmit={onSubmitHandler}>
                    <br />
                    <br />
                    <br />
                    <label>Email Id</label> <br />
                    email : {data.email} <br />
                    <input typee="text" name="email" onChange={onChangeHandler}/> <br />
                    <label>Password</label> <br />
                    password: {data.password} <br />
                    <input type="password" name="password" onChange={onChangeHandler}/> <br />
                    <input  type="submit" value="logIn"  className="btn btn-primary"/>
                </form>
                    <br />
                    <br />
                    <br />
            </center>
        </div>
    )
}

export default OnSubmit;