import {useEffect, useState} from 'react';
import axios from '../api/axios';
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";

const TraineeInformation = () => {
    const [data, setData] = useState([]);
    const [result, setResult] = useState([]);
    const [season, setSeason] = useState("");
    const [curSeason, setCurSeason] = useState("");
    const {ssn} = useParams();

    useEffect (() => {
        const getTrainee = async () => {
            try {
                const res = await axios.get(
                    `/trainee/${ssn}`
                );
                setData(res.data);
                console.log("useeffect", res.data)
            } 
            catch (err) {
                console.log(err.message);
            }
        }

        getTrainee();
    }, [])

    // const data ={
    //     "SSN": "000000000017",
    //     "phone": "0000000017",
    //     "address": "Ho Chi Minh",
    //     "photo": "https://s3-alpha-sig.figma.com/img/4777/0dfb/ebe59f07c7c54e7f2cb5094ece9808ac?Expires=1671408000&Signature=B8Z8Gie82VUex0c~o5FbzaAA9ZF-QV1Ep7MmnkHhX-XLVoSpYa9jH62wYxmhRcODaSNOy1eN8UFzG2glQDOkgHNmGM1Rta~HkH6WWCPkBlOStbuaJdnO5wlJeub6SPr8V45q5q6NEujpi2gSN3YlMzcqhTBd-xhIQW5H1Ym92DkkHnLGE-Qh5aGrAiP8aIgJ6JgOL1YIBKhCxtZoT1ovq5joclYpQHZQ8SMko33t~LmlwTKWDAzyRLrLq56WIKH5ArPtKhnq76sgTMk3OohmbYID7y-YjURijDphk6iIianH8uLM9z~frJCzt-PEYVDHFXG0iApGqv2BSKQRPerIyw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    //     "name": "Trainee Wallace",
    //     "numSeason": 2,
    //     "max_No": 4,
    //     "max_year": 2022
    // }
    
    // const result = [
    //     {
    //         "result_ep": 1,
    //         "result": 90
    //     },
    //     {
    //         "result_ep": 2,
    //         "result": 100
    //     },
    //     {
    //         "result_ep": 3,
    //         "result": 100
    //     },
    //     {
    //         "result_ep": 4,
    //         "result": 0
    //     },
    //     {
    //         "result_ep": 5,
    //         "result": 0
    //     }
    // ]

    const getResult = () => {
        const getResultOfTrainee = async () => { 
            try {
                const res = await axios.get(
                    `/trainee/${season}/${data.SSN}`
                );
                setCurSeason(season);
                setResult(res.data);
                
            } 
            catch (err) {
                console.error(err);
                setCurSeason(season);
                setResult([
                    {
                        "result_ep": 1,
                        "result": "error here"
                    },
                    {
                        "result_ep": 2,
                        "result": 0
                    },
                    {
                        "result_ep": 3,
                        "result": 0
                    },
                    {
                        "result_ep": 4,
                        "result": 0
                    },
                    {
                        "result_ep": 5,
                        "result": 0
                    }
                ]);
            }
        }

        season !== "" && getResultOfTrainee();
        season === "" && setResult("") 
        setCurSeason(season);
    }

    return (
        <div className="background">
            <Container style={{width: '90%', margin: '2% 5%', background: 'none', padding: 0}}>
                <Row>
                    <Col xl={4} style={{padding: 0}}>
                        <div style={{textAlign: 'center', paddingBottom: '40px', width: '95%', border: '1px solid black', borderRadius: '20pt', background: 'white', marginBottom: 10}}>
                            {console.log("photo", data)}
                            <img src={data[0][0].photo} alt='personalImg' style={{width: 200, height: 180, margin: '20px 0', objectFit: "cover", borderRadius: "50%"}}/>
                            <div style={{fontWeight: 700, fontSize: '150%'}}>{data[0][0].name}</div>
                            <div style={{color: '#7E7878', fontSize: '120%'}}>Trainee</div>
                            <div style={{color: '#7E7878', fontSize: '120%'}}>{data[0][0].SSN}</div>
                        </div>
                        <div style={{width: '95%', border: '1px solid black', borderRadius: '20pt', background: 'white', padding: '5px 15%'}}>
                            <Row>
                                <Col sm={7} style={{fontSize: '150%', borderBottom: '1px solid #b3b3b3', padding: '5px 0'}}><FaTwitter style={{marginTop: '-2%'}}/> Twitter</Col>
                                <Col sm={5} style={{fontSize: '120%', fontWeight: 500, borderBottom: '1px solid #b3b3b3', padding: '8px 0'}}>
                                    <a href='https://twitter.com/?lang=en' style={{textDecoration: 'none', color: 'black', float: 'right'}}>@name</a>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={7} style={{fontSize: '150%', borderBottom: '1px solid #b3b3b3', padding: '5px 0'}}><FaInstagram style={{marginTop: '-2%'}}/> Instagram</Col>
                                <Col sm={5} style={{fontSize: '120%', fontWeight: 500, borderBottom: '1px solid #b3b3b3', padding: '8px 0'}}>
                                    <a href='https://twitter.com/?lang=en' style={{textDecoration: 'none', color: 'black', float: 'right'}}>@name</a>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={7} style={{fontSize: '150%', borderBottom: '1px solid #b3b3b3', padding: '5px 0'}}><FaFacebook style={{marginTop: '-2%'}}/> Facebook</Col>
                                <Col sm={5} style={{fontSize: '120%', fontWeight: 500, borderBottom: '1px solid #b3b3b3', padding: '8px 0'}}>
                                    <a href='https://twitter.com/?lang=en' style={{textDecoration: 'none', color: 'black', float: 'right'}}>@name</a>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xl={8} >
                        <div style={{padding: '10px 40px', border: '1px solid black', borderRadius: '20pt', background: 'white'}}>
                            <Row>
                                <Col xl={4} style={{fontWeight: 700, borderBottom: '1px solid #b3b3b3', padding: '15px 0'}}>Full Name:</Col>
                                <Col xl={8} style={{fontWeight: 500, borderBottom: '1px solid #b3b3b3', padding: '15px 0'}}>{data[0][0].name}</Col>
                            </Row>
                            <Row>
                                <Col xl={4} style={{fontWeight: 700, borderBottom: '1px solid #b3b3b3', padding: '15px 0'}}>SSN:</Col>
                                <Col xl={8} style={{fontWeight: 500, borderBottom: '1px solid #b3b3b3', padding: '15px 0'}}>{data[0][0].SSN}</Col>
                            </Row>
                            <Row>
                                <Col xl={4} style={{fontWeight: 700, borderBottom: '1px solid #b3b3b3', padding: '15px 0'}}>Phone:</Col>
                                <Col xl={8} style={{fontWeight: 500, borderBottom: '1px solid #b3b3b3', padding: '15px 0'}}>{data[0][0].phone}</Col>
                            </Row>
                            <Row>
                                <Col xl={4} style={{fontWeight: 700, borderBottom: '1px solid #b3b3b3', padding: '15px 0'}}>Address:</Col>
                                <Col xl={8} style={{fontWeight: 500, borderBottom: '1px solid #b3b3b3', padding: '15px 0'}}>{data[0][0].address}</Col>
                            </Row>    
                            <Row>
                                <Col xl={4} style={{fontWeight: 700, borderBottom: '1px solid #b3b3b3', padding: '15px 0'}}>Number of seasons:</Col>
                                <Col xl={8} style={{fontWeight: 500, borderBottom: '1px solid #b3b3b3', padding: '15px 0'}}>{data[0][0].numSeason}</Col>
                            </Row>
                            <Row>
                                <Col xl={4} style={{fontWeight: 700, borderBottom: '1px solid #b3b3b3', padding: '15px 0'}}>Best achivement:</Col>
                                <Col xl={8} style={{fontWeight: 500, borderBottom: '1px solid #b3b3b3', padding: '15px 0'}}>{data[0][0].max_No + ' (' + data[0][0].max_year + ')'}</Col>
                            </Row>
                        </div>
                        <Row style={{marginTop: 10}}>
                            <Col style={{textAlign: 'center'}}>
                                <button className="Button" style={{width: '40%', fontSize: '130%', borderRadius: '5pt', marginBottom: 20}} onClick={getResult}>Get result</button>
                                <div style={{padding: '12px 0', background: 'white', borderRadius: '10pt',border: '1px solid black'}}>
                                    <span style={{marginRight: 10, fontWeight: 700}}>Season</span>
                                    <input placeholder='Insert season...' value={season} onChange={(e) => setSeason(e.target.value)}/>
                                </div>
                            </Col>
                            <Col>
                                {result.length !== 0 && 
                                    <div style={{padding: '12px 0', background: 'white', borderRadius: '10pt', border: '1px solid black', padding: '5px 15%'}}>
                                        <div style={{textAlign: 'center', fontWeight: 700, fontSize: '200%'}}>Season {curSeason}</div>
                                        {result.map(ep => 
                                            <Row key={ep.result_ep}>
                                                <Col sm={6} style={{fontWeight: 700, borderBottom: '1px solid #b3b3b3', padding: '15px 0'}}>Episode {ep.result_ep}:</Col>
                                                <Col sm={6} style={{fontWeight: 500, borderBottom: '1px solid #b3b3b3', padding: '15px 0px 15px 50px'}}>{ep.result>0?ep.result:"___"}</Col>
                                            </Row>
                                        )}
                                    </div>
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TraineeInformation;