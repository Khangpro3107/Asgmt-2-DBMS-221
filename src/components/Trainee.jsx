import {useEffect, useState} from 'react';
import axios from '../api/axios';
import AddForm from './AddForm';
import { FaSearch } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

const Trainee = () => {
    const [searchString, setSearchString] = useState("");
    const [addForm, setAddForm] = useState(false);
    //const [data, setData] = useState([]);

    const data = [
        {
            "SSN": "000000000071",
            "DoB": "1999-12-31",
            "Photo": "./Image/000000000017.png",
            "Company_ID": "C001",
            "Fname": "Traineex",
            "Lname": "Alee",
            "Paddress": "Australia",
            "Pphone":"0000000090"
        },
        {
            "SSN": "000000000071",
            "DoB": "1999-12-31",
            "Photo": "./Image/000000000017.png",
            "Company_ID": "C001",
            "Fname": "Traineex",
            "Lname": "Alee",
            "Paddress": "Australia",
            "Pphone":"0000000090"
        },
        {
            "SSN": "000000000071",
            "DoB": "1999-12-31",
            "Photo": "./Image/000000000017.png",
            "Company_ID": "C001",
            "Fname": "Traineex",
            "Lname": "Alee",
            "Paddress": "Australia",
            "Pphone":"0000000090"
        },
        {
            "SSN": "000000000071",
            "DoB": "1999-12-31",
            "Photo": "./Image/000000000017.png",
            "Company_ID": "C001",
            "Fname": "Traineex",
            "Lname": "Alee",
            "Paddress": "Australia",
            "Pphone":"0000000090"
        },
        {
            "SSN": "000000000071",
            "DoB": "1999-12-31",
            "Photo": "./Image/000000000017.png",
            "Company_ID": "C001",
            "Fname": "Traineex",
            "Lname": "Alee",
            "Paddress": "Australia",
            "Pphone":"0000000090"
        },
        {
            "SSN": "000000000071",
            "DoB": "1999-12-31",
            "Photo": "./Image/000000000017.png",
            "Company_ID": "C001",
            "Fname": "Traineex",
            "Lname": "Alee",
            "Paddress": "Australia",
            "Pphone":"0000000090"
        },
        {
            "SSN": "000000000071",
            "DoB": "1999-12-31",
            "Photo": "./Image/000000000017.png",
            "Company_ID": "C001",
            "Fname": "Traineex",
            "Lname": "Alee",
            "Paddress": "Australia",
            "Pphone":"0000000090"
        },
        {
            "SSN": "000000000071",
            "DoB": "1999-12-31",
            "Photo": "./Image/000000000017.png",
            "Company_ID": "C001",
            "Fname": "Traineex",
            "Lname": "Alee",
            "Paddress": "Australia",
            "Pphone":"0000000090"
        },
        {
            "SSN": "000000000071",
            "DoB": "1999-12-31",
            "Photo": "./Image/000000000017.png",
            "Company_ID": "C001",
            "Fname": "Traineex",
            "Lname": "Alee",
            "Paddress": "Australia",
            "Pphone":"0000000090"
        },
        {
            "SSN": "000000000071",
            "DoB": "1999-12-31",
            "Photo": "./Image/000000000017.png",
            "Company_ID": "C001",
            "Fname": "Traineex",
            "Lname": "Alee",
            "Paddress": "Australia",
            "Pphone":"0000000090"
        },
        {
            "SSN": "000000000071",
            "DoB": "1999-12-31",
            "Photo": "./Image/000000000017.png",
            "Company_ID": "C001",
            "Fname": "Traineex",
            "Lname": "Alee",
            "Paddress": "Australia",
            "Pphone":"0000000090"
        },
        {
            "SSN": "000000000071",
            "DoB": "1999-12-31",
            "Photo": "./Image/000000000017.png",
            "Company_ID": "C001",
            "Fname": "Traineex",
            "Lname": "Alee",
            "Paddress": "Australia",
            "Pphone":"0000000090"
        },
        {
            "SSN": "000000000071",
            "DoB": "1999-12-31",
            "Photo": "./Image/000000000017.png",
            "Company_ID": "C001",
            "Fname": "Traineex",
            "Lname": "Alee",
            "Paddress": "Australia",
            "Pphone":"0000000090"
        },
        {
            "SSN": "000000000071",
            "DoB": "1999-12-31",
            "Photo": "./Image/000000000017.png",
            "Company_ID": "C001",
            "Fname": "Traineex",
            "Lname": "Alee",
            "Paddress": "Australia",
            "Pphone":"0000000090"
        },
        {
            "SSN": "000000000071",
            "DoB": "1999-12-31",
            "Photo": "./Image/000000000017.png",
            "Company_ID": "C001",
            "Fname": "Traineex",
            "Lname": "Alee",
            "Paddress": "Australia",
            "Pphone":"0000000090"
        },
        {
            "SSN": "000000000071",
            "DoB": "1999-12-31",
            "Photo": "./Image/000000000017.png",
            "Company_ID": "C001",
            "Fname": "Traineex",
            "Lname": "Alee",
            "Paddress": "Australia",
            "Pphone":"0000000090"
        },
        {
            "SSN": "000000000071",
            "DoB": "1999-12-31",
            "Photo": "./Image/000000000017.png",
            "Company_ID": "C001",
            "Fname": "Traineex",
            "Lname": "Alee",
            "Paddress": "Australia",
            "Pphone":"0000000090"
        },
        {
            "SSN": "000000000071",
            "DoB": "1999-12-31",
            "Photo": "./Image/000000000017.png",
            "Company_ID": "C001",
            "Fname": "Traineex",
            "Lname": "Alee",
            "Paddress": "Australia",
            "Pphone":"0000000090"
        }
    ]

    /*useEffect (() => {
        const controller = new AbortController();

        const getAllTrainee = async () => { 
            try {
                const res = await axios.get(
                    '/trainee', 
                    {
                        signal: controller.signal
                    }
                );
                setData(res.data);
            } 
            catch (err) {
                console.error(err);
            }
        }

        getAllTrainee();

        return () => {
            controller.abort();
        }
    }, [])*/
    
    const handdleFind = async () => {
        /*try {
            const res = await axios.get(`/trainee/${searchString}`);
            setData(res.data);
        }
        catch (err) {
            console.error(err);
        }*/
    };

    const handdleAdd = () => setAddForm(true); 

    const handleInfo = () => {};

    return (
        <div className="background">
            <input 
                type="text" 
                value={searchString} 
                onChange={(e) => setSearchString(e.target.value)}
                placeholder="Insert name..."
                style={{margin: '3% 1% 3% 5%'}}
            />
            <button className="Button" style={{border: '1px solid white'}} onClick={handdleFind}><FaSearch style={{marginTop: '-9%'}}/> Find</button>
            <button className="Button" style={{float: 'right', margin: '3% 5% 0 0', border: '1px solid white'}} onClick={handdleAdd}><FaPlusCircle style={{marginTop: '-9%'}}/> Add</button>

            <div style={{height: '70%', overflowY: 'scroll', width: '90%', margin: 'auto'}}>
                <table className="table table-hover table-striped" style={{background: 'white', border: '1px solid white'}}>
                    <thead>
                        <tr style={{background: '#3F7B74', color: 'white'}}>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">SSN</th>
                            <th scope="col">Date Of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((trainee, index) => 
                            <tr key={index} onClick={handleInfo}>
                                <th scope="row">{index + 1}</th>
                                <td>{trainee.Fname}</td>
                                <td>{trainee.Lname}</td>
                                <td>{trainee.SSN}</td>
                                <td>{trainee.DoB}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {addForm && 
                <div className="model" style={{background: "rgba(49,49,49,0.8)"}}>
                    <AddForm setAddForm={setAddForm}/>
                </div>
            }
        </div>
    )
}

export default Trainee;
