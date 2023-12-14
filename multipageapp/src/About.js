import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
const About = () => {
    let params = useParams();
    return(
        <div>
            <center>
            <h1>Welcome to About page</h1>
            <p>Name : {params.name}</p>
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            </center>
        </div>
    )
}

export default About;