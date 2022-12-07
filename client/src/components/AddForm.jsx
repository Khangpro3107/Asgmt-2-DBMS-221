import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MessageBox} from './MessageBox';
import axios from '../api/axios';

const AddForm = (props) => {
    const [ssn, setSsn] = useState("");
    const [doB, setDoB] = useState("");
    const [photo, setPhoto] = useState("");
    const [companyId, setCompanyId] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [paddress, setPaddress] = useState("");
    const [pphone, setPphone] = useState("");
    const [messageBoxAdd, setMessageBoxAdd] = useState(false);
    const [messageBoxClose, setMessageBoxClose] = useState(false);

    return (
        <div style={{margin: '8% 15%', background: 'white', width: '70%', display: 'inline-block'}}>
            <button className="Xbutton" style={{fontSize: '150%', float: 'right'}} onClick={()=>{
                setMessageBoxClose(true);
            }}>X</button>
            <Container fluid style={{padding: '0 16%'}}>
                <Row>
                    <h1 style={{textAlign: 'center', padding: '6% 0', fontWeight: 700}}>Add information for a new trainee</h1>
                </Row>
                <Row style={{paddingBottom: '3%'}}>
                    <Col xl={2} style={{fontWeight: 600}}>First Name:</Col>
                    <Col xl={4}>
                        <input value={fname} onChange={(e) => setFname(e.target.value)} type="text" placeholder="Insert First Name..." style={{width: '100%'}}/>
                    </Col>
                    <Col xl={2} style={{fontWeight: 600}}>Last Name:</Col>
                    <Col xl={4}>
                        <input value={lname} onChange={(e) => setLname(e.target.value)} type="text" placeholder="Insert Last Name..." style={{width: '100%'}}/>
                    </Col>
                </Row>
                <Row style={{paddingBottom: '3%'}}>
                    <Col xl={2} style={{fontWeight: 600}}>SSN:</Col>
                    <Col xl={4}>
                        <input value={ssn} onChange={(e) => setSsn(e.target.value)} type="text" placeholder="Insert SSN..." style={{width: '100%'}}/>
                    </Col>
                    <Col xl={2} style={{fontWeight: 600}}>Birthdate:</Col>
                    <Col xl={4}>
                        <input value={doB} onChange={(e) => setDoB(e.target.value)} type="date" style={{width: '100%'}}/>
                    </Col>
                </Row>
                <Row style={{paddingBottom: '3%'}}>
                    <Col xl={2} style={{fontWeight: 600}}>Photo:</Col>
                    <Col xl={4}>
                        <input value={photo} onChange={(e) => setPhoto(e.target.value)} type="text" placeholder="Insert Photo Link..." style={{width: '100%'}}/>
                    </Col>
                    <Col xl={2} style={{fontWeight: 600}}>Company:</Col>
                    <Col xl={4}>
                        <input value={companyId} onChange={(e) => setCompanyId(e.target.value)} type="text" placeholder="Insert Company ID..." style={{width: '100%'}}/>
                    </Col>
                </Row>
                <Row style={{paddingBottom: '3%'}}>
                    <Col xl={2} style={{fontWeight: 600}}>Address:</Col>
                    <Col xl={4}>
                        <input value={paddress} onChange={(e) => setPaddress(e.target.value)} type="text" placeholder="Insert Address..." style={{width: '100%'}}/>
                    </Col>
                    <Col xl={2} style={{fontWeight: 600}}>Phone:</Col>
                    <Col xl={4}>
                        <input value={pphone} onChange={(e) => setPphone(e.target.value)} type="text" placeholder="Insert Phone Number..." style={{width: '100%'}}/>
                    </Col>
                </Row>
                <Row>
                    <button style={{width: '20%', margin: '20px 40% 50px 40%', fontSize: 'large', fontWeight: 600}} className="Button" onClick={() => setMessageBoxAdd(true)}>
                        Add
                    </button>
                </Row>
            </Container>
            {messageBoxClose && 
                <div className="model">
                    <MessageBox 
                        mess="Cancel adding new trainee?" 
                        handleYes={() => {
                            setMessageBoxClose(false);
                            props.setAddForm(false);
                        }}
                        handleNo={() => setMessageBoxClose(false)}
                    />
                </div>
            }
            {messageBoxAdd && 
                <div className="model">
                    <MessageBox 
                        mess="Confirm adding new trainee?" 
                        handleYes={async () => {
                            try {
                                await axios.post(
                                    '/trainee',
                                    {
                                        "SSN": ssn,
                                        "DoB": doB,
                                        "photo": photo,
                                        "Company_ID": companyId,
                                        "Fname": fname,
                                        "Lname": lname,
                                        "Paddress": paddress,
                                        "Pphone": pphone
                                    }
                                )
                                setMessageBoxAdd(false);
                                props.setAddForm(false);
                            }
                            catch (err) {
                                console.error(err);
                            }
                        }}
                        handleNo={() => setMessageBoxAdd(false)}
                    />
                </div>
            }
        </div>
    )
}


export default AddForm;