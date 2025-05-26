import './ImageGrid.css'
const ScoreTracker=({score, scoreData})=>{
    return(
        <div className="head">
            <div className="score">

                Pawints: {score}
            </div>
            {/* <div className="middle">
                <p id="loading-message">Please wait while the cats get comfy</p>
            </div> */}
            <div className="highscore">

            Pawfect Record: {scoreData.length>0?Math.max(...scoreData):0}
            </div>
        </div>
    )
}

export default ScoreTracker;