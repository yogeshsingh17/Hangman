import { Link } from "react-router-dom";
import MaskedText from "../../components/MaskedText/MaskedText";

function PlayGame(){
    return (
        <div>
            <h1>Play Game</h1>

            <MaskedText text="yogesh" usedLetters={['o', 'h']} />
            <hr/>
            
            <Link to={'/Hangman/start'}> Start Game </Link>
        </div>
    );
}

export default PlayGame;