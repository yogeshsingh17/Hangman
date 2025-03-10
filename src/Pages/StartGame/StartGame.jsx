// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer";

function StartGame(){
    const navigate = useNavigate();

    function handleSubmit(value){
        console.log(value);
        navigate('/Hangman/play', {state: {wordSelected : value}});             //Here we can pass the route and then we can pass the object with the state which will hold the current value added by the user in start game.
    }

    return (
        <div>
            <h1>Start Game</h1>
            <TextInputFormContainer onSubmit={handleSubmit}/>
            {/* <Link to={'/Hangman/play'}> Play Game </Link> */}
        </div>
    );
}

export default StartGame;