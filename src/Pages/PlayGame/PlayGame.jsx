import { Link } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";
import LetterButtons from "../../components/LetterButtons/LetterButtons";

function PlayGame(){
    return (
        <div>
            <h1>Play Game</h1>

            <MaskedText text="yogesh" usedLetters={['o', 'h']} />
            <hr/>
            
            <LetterButtons usedLetters={['o', 'h']} />
            <hr />
            
            <Link to={'/Hangman/start'}> Start Game </Link>
        </div>
    );
}

export default PlayGame;