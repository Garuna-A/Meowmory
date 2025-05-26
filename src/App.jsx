import { useState } from 'react';
import CatFetcher from './components/images';
import ScoreTracker from './components/head';
import './App.css'


function App() {
  const[score,setScore] = useState(0);
  const[scoreData,setScoreData] = useState([]);
  const [value, setValue] = useState(4);
  console.log("Props:", { score, setScore, setScoreData });

  return(
    <div className='page'>
      <div className="heading">
        <h1>Meowmory</h1>
        <p style={{fontSize:'1.5rem'}}>(🐾 Click a cat only once!)</p>
      </div>
      <div className="scoreboard">
        <ScoreTracker score={score} scoreData={scoreData}/>
      </div>
      <div className="cats">
        <CatFetcher score={score} setScore={setScore} setScoreData={setScoreData} value={value} setValue={setValue}/>
      </div>
      <div className="bottom">
      <a href="https://github.com/Garuna-A" target="_blank" rel="noopener noreferrer">Made with ❤️ by Anurag</a>
      </div>

    </div>
  )

}

export default App
