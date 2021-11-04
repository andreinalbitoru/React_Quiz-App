import { MenuItem, TextField } from "@material-ui/core";
// import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {useHistory} from 'react-router'
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Categories from "../../Data/Categories";
import './Home.css';

const Home = ({ name, setName, fetchQuestions }) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const history = useHistory();

    const handleSubmit = () => {
        if(!category || !difficulty || !name) {
            setError(true);
            return;
        } else {
            setError(false);
            fetchQuestions(category, difficulty);
            history.push('/quiz');
        }
    };

    return (
        <div className="content">
            <div className="settings">
            <img src="/Questions-bro.svg" className="banner1" alt="quiz app" />
                <span className="reminder" >This can take a few minutes...</span>
                
                <div className="settings__select">
                    {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
                <TextField 
                    style={{ marginBottom:30 }}
                    label="Enter Your Name" 
                    variant="outlined"
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField 
                    select 
                    label="Select Category"  
                    variant="outlined" 
                    style={{ marginBottom:30 }}
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                >
                    {Categories.map((cat) => (
                        <MenuItem key={cat.category} value={cat.value}>
                            {cat.category}
                        </MenuItem>
                    ))}
                 </TextField>

                 <TextField
                    select
                    label="Select Difficulty"
                    variant="outlined"
                    style={{ marginBottom: 30 }}
                    onChange={(e) => setDifficulty(e.target.value)}
                    value={difficulty}
                >
                    <MenuItem key="Easy" value="easy">
                      Easy
                    </MenuItem>
                    <MenuItem key="Medium" value="medium">
                      Medium
                    </MenuItem>
                    <MenuItem key="Hard" value="hard">
                      Hard
                     </MenuItem>
                </TextField>

                <button
                 onClick={handleSubmit} 
                 className="start-button"><span>Start Quiz</span> 
                </button>

                </div>
            </div>

            {/* <img src='./quiz.svg' className='banner' alt="quiz img"/> */}

        </div>
    )
}

export default Home;
