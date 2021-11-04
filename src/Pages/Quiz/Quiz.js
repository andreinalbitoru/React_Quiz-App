import './Quiz.css';
import { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import Question from '../../components/Question/Question';

const Quiz = ({name,score,questions,setQuestions,setScore}) => {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
    
    useEffect(() => {
        console.log(questions);
        setOptions(
            questions && 
                handleShuffle([
                    questions[currQues]?.correct_answer,
                    ...questions[currQues]?.incorrect_answers, 
                ])
        );
    }, [questions, currQues]);

    console.log(options);

    const handleShuffle = (optionss) => {
        return optionss.sort(() => Math.random() - 0.5);
    };

    return (
    <div className="quiz">
        <p className="subtitle"> Welcome, <span className="name">{name}</span> </p>
        <p className="description2">Let's get started</p>

        {questions ? (

          <>
           
          
            <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            />
        
          </>
        ) : ( 
          <CircularProgress 
            style={{ margin: 100 }}
            color="inherit"
            size={150}
            thickness={1}    
        />
    )}
    </div>  
    );
};

export default Quiz;
