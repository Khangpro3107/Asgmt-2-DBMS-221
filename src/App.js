import './App.css';
import Login from './components/Login';
import Trainee from './components/Trainee';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';
import Home from './components/Home';
import TraineeInformation from './components/TraineeInformation';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />} />

            <Route element={<RequireAuth/>}>
                <Route path="" element={<Home />} />
                <Route path="trainee" >
                    <Route path="" element={<Trainee />} />
                    <Route path=":ssn" element={<TraineeInformation />} />  
                </Route>             
            </Route>
        </Route>
    </Routes>
  );
}

export default App;
