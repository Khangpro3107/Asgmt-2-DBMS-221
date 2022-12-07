import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Home = () => {
    return (
        <div className="background" style={{textAlign: 'center'}}>
            <div style={{textAlign: 'center', background: 'white', height: '70%'}} className="container">
                <h1 style={{padding: '10% 0 5% 0'}}>Login successfully!</h1>
                <Link to='/trainees' style={{fontSize: '150%'}}>
                    <span>Continue to main page </span>
                    <FaRegArrowAltCircleRight />
                </Link>
            </div>
        </div>
    )
}

export default Home;