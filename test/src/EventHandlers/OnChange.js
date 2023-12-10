import { useState } from "react"

const OnChange = () => {
    const [person,setPerson] = useState('')
    const [data,setData] = useState({
        place : '',
        state: '',
        zipcode: ''
    })

    const onChangeHandler = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }
    return(
        <div>
            <center>
                Name : {person} <br />
                <input type="text" name="person" onChange={(e)=>setPerson(e.target.value)} /> <br />
                Place : {data.place} <br />
                <input type="text" name="place" onChange={onChangeHandler} /> <br />
                State : {data.state}<br />
                <input type="text" name="state" onChange={onChangeHandler} /> <br />
                Zipcode : {data.zipcode}<br />
                <input type="text" name="zipcode" onChange={onChangeHandler} /> <br />
            </center>
        </div>
    )
}

export default OnChange;