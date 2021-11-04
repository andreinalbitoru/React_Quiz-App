// import { Button } from "@material-ui/core";
// import { Button } from 'react-bootstrap';
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Question.css";

const Question = ({
    currQues,
    setCurrQues,
    questions,
    options,
    correct,
    setScore,
    score,
  }) => {
    
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    const history = useHistory();
    
    const handleSelect = (i) => {
      if(selected===i && selected===correct)  return "select"; 
      else if(selected===i && selected!==correct) return "wrong"; 
      else if(i===correct) return "select"; 
    };

    const handleCheck = (i) => {
      setSelected(i);
      if (i === correct) setScore(score + 1);
      setError(false);
    };
    

    const handleNext = () => {
      if (currQues > 8) {
        history.push("/result");
      } else if (selected) {
        setCurrQues(currQues + 1)
        setSelected();
      } else {
        setError("Please select an option first");
      }
    };

    const handleQuit = () => {
        history.push('/home');
    };

    return (
    <div className="question">
        <h2 className="current_question">Question {currQues + 1}/10</h2>
        <p className="science">({questions[currQues].category})</p>
        <span className="scor">Score : {score}</span>
        

        <div className="singleQuestion">
            <div className="intrebare">{questions[currQues].question}</div>
            <div className="options">
              {error && <ErrorMessage>{error}</ErrorMessage>}
              {options &&
                options.map((i) => (
                 <button 
                  className={`singleOption ${selected && handleSelect(i)}`}
                  key={i}
                  onClick ={() => handleCheck(i)}
                  disabled={selected}
                >
                  {i}
                </button>
                ))}

                <button onClick={handleQuit}
                  className="btn1"><span>Quit</span></button>
                <button onClick={handleNext}
                  className="btn2"><span>Next</span></button>
            </div>
        </div>
    </div>
    );
};

export default Question;
