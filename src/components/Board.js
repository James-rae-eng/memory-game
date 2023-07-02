import React, { useState } from "react";
import Card from './Card';
import random400 from '../images/random400.jpg';
import cx500 from '../images/cx500.jpg';
import k75 from '../images/k75.jpg';
import scout from '../images/scout.jpg';
import virago from '../images/virago.jpg';
import zerosr from '../images/zerosr.webp';
import Scoreboard from './Scoreboard';

const Board = () => {
    const [cards, setCards] = useState([random400, cx500, k75, scout, virago, zerosr]);
    const [lastClicked, setLastClicked] = useState(null);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const shuffleCards = () => {
        const newArray = shuffle(cards);
        setCards([...newArray]);
    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function handleClick(item) {
        if (item === lastClicked) {
            setHighScore(score);
            setScore(0)
        } else {
            setScore(score+1);
        }
        setLastClicked(item);
    }

    return (
        <div className="main">
            <div>
                <Scoreboard score={score} highScore={highScore}/>
            </div>
            <div className="board" onClick={() => shuffleCards()}>
                <div onClick={() => handleClick(cards[0])}>
                    <Card image={cards[0]} />
                </div>
                <div onClick={() => handleClick(cards[1])}>
                    <Card image={cards[1]} />
                </div>
                <div onClick={() => handleClick(cards[2])}>
                    <Card image={cards[2]} />
                </div>
                <div onClick={() => handleClick(cards[3])}>
                    <Card image={cards[3]} />
                </div>
                <div onClick={() => handleClick(cards[4])}>
                    <Card image={cards[4]} />
                </div>
                <div onClick={() => handleClick(cards[5])}>
                    <Card image={cards[5]} />
                </div>
            </div>
        </div>
    
    );
}

export default Board;