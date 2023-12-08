import { useState } from "react";

const OnSubmit = () => {
    const[data,setData] = useState({
        email: '',
        password: ''
    })
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value});
    }

    const  submitHandler = e => {
        e.preventDefault();
        console.log(data);
    }
    return(
        <div>
            <center>
                <form onSubmit={submitHandler}>
                    <label>Email</label> <br />
                    <input type="text"  name='email' onChange={changeHandler}/> <br />
                    <label>Password: </label> <br />
                    <input type="password" name='password'onChange={changeHandler}/> <br />
                    <input type="submit" value="LogIn" />
                </form>
            </center>
        </div>
    );
}

export default OnSubmit;