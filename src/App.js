import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState("");
  const [score, setScore] = useState(0);

  const fetchQuestions=async(category,difficulty)=>{
             const {data}=await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
             setQuestions(data.results);
             console.log(questions);
            }
  return (
<Router>
   <div className="app" style={{backgroundImage:"url(./backpic.png)"}}>
   <Header/>
   
   
    <Routes>
      <Route path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}></Route>
      <Route path="/quiz" element={<Quiz name={name} questions={questions} setQuestions={setQuestions} score={score} setScore={setScore} />}></Route>
      <Route path="/result" element={<Result name={name} score={score}/>}></Route>
    </Routes>
    
  
   </div>
   <Footer/>
  
   </Router>
  );
}

export default App;
