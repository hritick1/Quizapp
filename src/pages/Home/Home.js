import React, { useState } from 'react'
import "./Home.css"
import { Button, Menu, MenuItem, TextField } from '@mui/material'
import Categories from '../../Data/Categories'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage'


const Home = ({name, setName,fetchQuestions}) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
    const navigate=useNavigate();
    const handleSubmit=()=>{
  if(!category|| !difficulty || !name){
    setError(true);
    return;
    }
    fetchQuestions(category,difficulty);
    navigate("/quiz");
    }
  return (
    <div className='content'>
        <div className='settings'>
        <span style={{fontSize:30}}> Quiz Settings</span>
        <div className="settings_select">
            {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
            <TextField style={{marginBottom:25}} label="Enter Your Name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}/>
            <TextField select label="Select Category" variant='outlined' style={{marginBottom:30}} value={category} onChange={(e)=>setCategory(e.target.value)}>
             {Categories.map((cat)=>(
                     <MenuItem key={cat.category} value={cat.value}>
                        {cat.category}
                     </MenuItem>
             ))}
              
            </TextField>
            <TextField select style={{marginBottom:30}} label="Select Difficulty" variant="outlined"value={difficulty} onChange={(e)=>setDifficulty(e.target.value)}>
                <MenuItem key="Easy" value="easy">Easy</MenuItem>
                <MenuItem key="Medium" value="medium">Medium</MenuItem>
                <MenuItem key="Hard" value="hard">Hard</MenuItem>
            </TextField>
            <Button variant='contained' color='primary' size='large' onClick={handleSubmit}>Start Quiz</Button>
        </div>
        </div>
        <img src="quiz.svg" alt="Quiz App" className='banner'/>

    </div>
  )
}

export default Home