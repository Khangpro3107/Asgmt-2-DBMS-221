import {useState, useRef, useEffect, useContext} from 'react';
import '../App.css';
import AuthContext from '../context/AuthProvider';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/axios';

const LOGIN_URL = '/login';

const Login = () => {    
    
    const { setAuth } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const userRef = useRef(); 

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                LOGIN_URL,
                {"username": username, "password": password},
                {withCredentials: true}
            );
            setUsername('');
            setPassword('');
            if (res.status === 200) {
                navigate("/", {replace: true}) ;
                setAuth({username, password})
                localStorage.setItem("username", username)
            }
            else throw Error("Unknown error.")
        } catch (err) {
            if (!err?.response) {
                setErr("Server not responding.");
            }
            else if (err.response?.status === 401) {
                setErr("Wrong username or password.");
            } else {
                setErr("Unknown error.");
            }
        }
    }

    return (
        <div className="background">
            <Container fluid className="container">
                <Row>   
                    <Col style={{textAlign: 'right', margin: '13% 0'}}><img src={require('../Image/login.png')} alt="login" style={{width: '90%'}}/></Col>
                    <Col style={{textAlign: 'center', margin: 'auto 5%'}}>
                        <Form style={{textAlign: 'left', background: 'white'}} onSubmit={handleLogin}>
                            <h1 style={{textAlign: 'center', padding: '20px 0', fontWeight: 700}}>Login</h1>
                            <Form.Group className="mb-3">
                                <Form.Label style={{fontWeight: 700, fontSize: '120%', paddingLeft: '10%'}}>Username</Form.Label>
                                <Form.Control required value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" style={{width: '80%', margin: 'auto'}} ref={userRef}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label style={{fontWeight: 700, fontSize: '120%', paddingLeft: '10%'}}>Password</Form.Label>
                                <Form.Control required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" style={{width: '80%', margin: 'auto'}} />
                            </Form.Group>
                            {err ? <p style={{textAlign: "center"}}>{err}</p> : null}
                            <button style={{width: '30%', margin: '20px 35% 50px 35%', fontSize: 'large', fontWeight: 600}} className="Button">
                                Login
                            </button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login