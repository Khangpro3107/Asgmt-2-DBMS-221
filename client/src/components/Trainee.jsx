import { useEffect, useState, useContext } from "react";
import axios from "../api/axios";
import AddForm from "./AddForm";
import {
  FaSearch,
  FaEye,
  FaPlusCircle,
  FaUserCircle,
  FaPowerOff,
} from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const Trainee = () => {
  const [searchString, setSearchString] = useState("");
  const [addForm, setAddForm] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {

    const getAllTrainee = async () => {
      try {
        const res = await axios.get("/trainees")
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    getAllTrainee();
  }, []);

  const handleFind = async () => {
    try {
            const res = await axios.get(`/trainees?name=${searchString}`);
            setData(res.data);
        }
        catch (err) {
            console.error(err);
        }
  };

  const handleAdd = () => setAddForm(true);

  const handleInfo = () => {};

  return (
    <div className="background">
      <input
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        placeholder="Insert name..."
        style={{
          margin: "3% 1% 3% 10%",
          border: "1px solid black",
          borderRadius: "10pt",
          padding: "5px 10px",
        }}
      />
      <button
        className="FindButton"
        style={{ marginRight: "1%", borderRadius: "5pt" }}
        onClick={handleFind}
      >
        <FaSearch style={{ marginTop: "-9%" }} /> Find
      </button>
      <button
        className="Button"
        style={{ borderRadius: "5pt" }}
        onClick={handleAdd}
      >
        <FaPlusCircle style={{ marginTop: "-9%" }} /> Add
      </button>
      <button
        className="logoutButton"
        style={{
          float: "right",
          margin: "3% 10% 0 0",
          borderTopRightRadius: "10pt",
          borderBottomRightRadius: "10pt",
        }}
        onClick={async () => {
          try {
            await axios.get("/logout");
          } catch (err) {
            console.error(err);
          }
          setAuth({});
        }}
      >
        <FaPowerOff style={{ marginTop: -4 }} />
      </button>
      <p
        style={{
          float: "right",
          marginTop: "3%",
          background: "black",
          padding: "2.8px 5%",
          color: "white",
          borderTopLeftRadius: "10pt",
          borderBottomLeftRadius: "10pt",
        }}
      >
        <FaUserCircle style={{ marginTop: "-3%" }} /> {auth.username}{" "}
      </p>

      <div
        style={{
          width: "80%",
          margin: "auto",
          border: "1px solid black",
          borderRadius: "20pt",
          overflow: "hidden",
          background: "white",
        }}
      >
        <Container
          style={{
            width: "100%",
            margin: 0,
            overflowY: "scroll",
            maxHeight: "500px",
            background: "white",
          }}
        >
          <Row style={{ margin: "6px 15px", fontWeight: 700 }}>
            <Col
              style={{
                paddingLeft: 0,
                color: "black",
                paddingTop: "12px",
                height: "40px",
              }}
              xl={1}
            >
              #
            </Col>
            <Col style={{ color: "black", paddingTop: "12px" }} xl={2}>
              First Name
            </Col>
            <Col style={{ color: "black", paddingTop: "12px" }} xl={2}>
              Last Name
            </Col>
            <Col style={{ color: "black", paddingTop: "12px" }} xl={3}>
              SSN
            </Col>
            <Col style={{ color: "black", paddingTop: "12px" }} xl={3}>
              Date Of Birth
            </Col>
            <Col style={{ color: "black", paddingTop: "12px" }} xl={1}></Col>
          </Row>
          <Row
            style={{ margin: "0px 15px", borderBottom: "2px solid black" }}
          ></Row>
          {data.map((trainee, index) => (
            <Row
              key={index}
              onClick={handleInfo}
              style={{ margin: "5px 15px" }}
            >
              <Col
                style={{
                  padding: 0,
                  height: "50px",
                  paddingTop: "2%",
                  borderBottom: "1px solid #b3b3b3",
                  fontWeight: 700,
                  color: "black",
                }}
                xl={1}
              >
                {index + 1}
              </Col>
              <Col
                style={{
                  height: "50px",
                  paddingTop: "2%",
                  borderBottom: "1px solid #b3b3b3",
                }}
                xl={2}
              >
                {trainee.Fname}
              </Col>
              <Col
                style={{
                  height: "50px",
                  paddingTop: "2%",
                  borderBottom: "1px solid #b3b3b3",
                }}
                xl={2}
              >
                {trainee.Lname}
              </Col>
              <Col
                style={{
                  height: "50px",
                  paddingTop: "2%",
                  borderBottom: "1px solid #b3b3b3",
                }}
                xl={3}
              >
                {trainee.SSN}
              </Col>
              <Col
                style={{
                  height: "50px",
                  paddingTop: "2%",
                  borderBottom: "1px solid #b3b3b3",
                }}
                xl={3}
              >
                {trainee.DoB.slice(8, 10) +
                  "-" +
                  trainee.DoB.slice(5, 7) +
                  "-" +
                  trainee.DoB.slice(0, 4)}
              </Col>
              <Col
                style={{
                  height: "50px",
                  paddingTop: "2%",
                  borderBottom: "1px solid #b3b3b3",
                  textAlign: "right",
                }}
                xl={1}
              >
                <Link to={"/trainee/" + trainee.SSN} style={{ color: "black" }}>
                  <FaEye style={{ marginTop: "-10%" }} />
                </Link>
              </Col>
            </Row>
          ))}
        </Container>
      </div>

      {addForm && (
        <div className="model" style={{ background: "rgba(49,49,49,0.8)" }}>
          <AddForm setAddForm={setAddForm} />
        </div>
      )}
    </div>
  );
};

export default Trainee;
