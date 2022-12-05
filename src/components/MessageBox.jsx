const MessageBox = (props) => (
    <div className = "MessageBox">
        <h4 style={{backgroundColor: 'white', padding: 0, margin: "auto", marginTop: 10, width: '80%'}}>{props.mess}</h4>
        <div style={{paddingTop: 30, paddingBottom: 20}}>
            <button className="Button" onClick={props.handleYes} style={{width: '22%', marginRight: '5%'}}>Yes</button>
            <button className="Button" onClick={props.handleNo} style={{width: '22%'}}>No</button>
            {props.warning !== "" && <p style={{color: 'red', marginTop: 10, fontWeight: 600}}>{props.warning}</p>}
        </div>
    </div>
);

const InformBox = (props) => (
    <div className = "MessageBox">
        <h4 style={{backgroundColor: 'white', padding: 0, margin: "auto", marginTop: 10, width: '80%'}}>{props.mess}</h4>
        <div style={{paddingTop: 30, paddingBottom: 20}}>
            <button className="messageButton" onClick={props.handleYes}>OK</button>
        </div>
    </div>
);

export {MessageBox, InformBox}; 