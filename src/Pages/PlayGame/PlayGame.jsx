import { Link, useLocation } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";
import { useState } from "react";
import Hangman from "../../components/Hangman/Hangman";

function PlayGame(){

    const [step, setStep] = useState(0);

    const [usedLetters, setUsedLetters] = useState([]);

    const handleLetterClick = function(letter){
        setUsedLetters([... usedLetters, letter])               // Using spread operator to fetch all the elemenbts in usedLetters which have been used.
        
        if(wordSelected.toUpperCase().includes(letter))
        {
            console.log("Correct");
        } else
        {
            console.log("Incorrect");
            setStep(step + 1);
        }
    }

    const location = useLocation();
    const wordSelected = location.state?.wordSelected;          // If the state is not defined it will return undefined, if the state is defined it will return the value of the word selected.

    return (
        <div>
            <h1>Play Game</h1>

            <MaskedText text={wordSelected} usedLetters={usedLetters} />
            <hr/>
            
            <div className="flex items-center justify-between">
                <div className="basis-2/4">
                    <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick}/>
                    <hr />
                </div>
                <div className="flex items-center justify-center basis-2/4">
                    <Hangman step={step}/>
                </div>
            </div>
            
            <Link to={'/Hangman/start'} className="text-blue-500 underline hover:text-blue-700"> Start Game </Link>
        </div>
    );
}

export default PlayGame;