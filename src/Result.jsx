import React from 'react';

const Result = ({score, playAgain}) => {
    return (
        <div  className="score-board"> 
            <div className="score"> {score === 5 ? "You Scored Everything! Brilliant!": `Your score is ${score}/5`}
            <button className="playBtn" onClick={playAgain}>Play Again!</button>
            </div>
        </div>
    );
}

export default Result;
