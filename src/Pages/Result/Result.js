import { Button } from "@material-ui/core";
// import { Button } from 'react-bootstrap';
import { useEffect } from "react"
import { useHistory } from "react-router";
import "./Result.css";



const Result = ({ name, score }) => {
const history = useHistory();

useEffect(() => {
    if(!name) {
        history.pushState('/home');
    }


}, [name,history]);

    return (
        <div className="result">
             <img src="/fireworks.svg" className="banner" alt="quiz app" />
            <span className="congrats"> Congratulations <span className="name">{name} !</span> </span>
            <p className="mark">You scored</p>
           <span className="final-score">{score} points/10</span>
           <div className="final-buttons">
           <div className="button1">
           <Button 
            variant="contained"
            color="primary"
            size="large"
            style={{ alignSelf: "center", marginTop: 20, height:60}}
            href="/home"
           >
            Take Quiz Again 
           </Button>
           </div>
           <div className="button2">
           <Button 
            variant="outlined"
            color="secondary"
            size="large"
            style={{ alignSelf: "center", marginTop: 20, height:60}}
            href="/home"
           >
            Go To Home Page  
           </Button>
           </div>
           </div>
        </div>
    );
};

export default Result;
