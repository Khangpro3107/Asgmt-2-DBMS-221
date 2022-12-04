import './App.css';
import Login from './components/Login';
import Trainee from './components/Trainee';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';
import Home from './components/Home';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} />

            <Route element={<RequireAuth/>}>
              <Route path="/" element={<Home />} />
              <Route path="/trainee" element={<Trainee />} />            
            </Route>
        </Route>
    </Routes>
  );
}

export default App;
