const Scoreboard = (props) => {
    return (
        <div className="scoreboard">
            <h1>Score = {props.score}</h1>
            <h1>High Score = {props.highScore}</h1>
        </div>
    );
}

export default Scoreboard;