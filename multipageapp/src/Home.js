import {Link} from 'react-router-dom';

const Home = () => {
    const user="John";
    return(
        <div>
            <center> 
                <h1>Welcome to Home page</h1>
                <Link to={`/about/${user}`}>About</Link>
                <Link to={`/dashboard?name=${user}&age=${26}`}>Dashboard</Link>
            </center>  
        </div>
    )
}

export default Home;