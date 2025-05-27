import { useState } from "react";
import { useEffect } from "react";
import swal from 'sweetalert2';
import "./ImageGrid.css";

const CatFetcher=({score,setScore,setScoreData,value,setValue})=>{

      
    const [catData, setCatData] = useState([]);
    const [clickData, setClickData] = useState([]);
    const [scoreCopi, setScoreCopi] = useState(1);

    const handleClick = (key) =>{
        if(!clickData.includes(key)){
            console.log("score: ", scoreCopi, "value: ", value);
            if(scoreCopi==value && value<9){
                swal.fire({
                    title: 'Paw-some! 🐾',
                    text: "You've leveled up!",
                    icon: 'success',
                    background: '#273F4F',
                    confirmButtonColor: '#FE7743',
                    color:"#EFEEEA"
                })
                setScoreCopi(1);
                setValue(value+4);
                setClickData([]);
                return;
            }
            if(value>12){
                setValue(4);
                setScoreCopi(1);
                setClickData([]);
                return;
            }
            setScoreCopi(scoreCopi+1);
            setClickData((prev)=>[...prev,key]);
            setScore(score+1);
            setScoreData((prev)=>[...prev,score+1]);
            
            //If we used the shuffle function separately without updating the setCatData, it wouldn't have worked
            setCatData(prev => {
                const shuffled = [...prev];
                for (let i = shuffled.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
                }
                return shuffled;
            });
        }
        else{
            swal.fire({
                icon: 'error',
                title: 'uh-oh!',
                text: 'No cheating, hooman! This cat remembers you.',
                background: '#273F4F',
                confirmButtonColor: '#FE7743',
                color:"#EFEEEA"
            })
            setValue(4);
            setScore(0);
            setClickData([]);
        }
    }

    useEffect(()=>{
        const fetchCats = async() =>{
            const url = `https://api.thecatapi.com/v1/images/search?limit=${value}&has_breeds=1`;
            const api_key = "live_ceSpE6fJewPU5GswQKzGVy9gSgk7VhROXyb1gwQ1I5vSC0DqBuLAAxWYWH1kYf2Y"
            const response = await fetch(url,{
                headers:{
                    'x-api-key': api_key
                },
            });
            const data = await response.json();
            
            const cats = data.map((cat)=>[cat.url,cat.breeds[0].name]);
            setCatData(cats);
        }
        
        fetchCats();
        
        
    }, [value]);

    return(
        <div className="container">
            
                {catData.map(([url,breed],i)=>(
                  <button key={i} onClick={()=>handleClick(url)}>
                    <img src={url} alt={breed} width={150} />
                    <p>{breed}</p>
                  </button>  
                ))}
            
        </div>
        
    )
}

export default CatFetcher;