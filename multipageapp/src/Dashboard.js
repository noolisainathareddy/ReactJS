import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    let values = useLocation(); 
    console.log(values);
    console.log(values.search)
    let params = new URLSearchParams(values.search); 
    return(
        <div>
            <center>
                <h1>Welcome to dashboard</h1>
                <p> Name : {params.get('name')}</p>
                <p> Age : {params.get('age')}</p>
                <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            </center>   
        </div>        
    )
}

export default Dashboard;