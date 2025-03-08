import { Route, Routes } from "react-router-dom";
// import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";
import PlayGame from "./Pages/PlayGame/PlayGame";
import StartGame from "./Pages/StartGame/StartGame";

function App(){
  return (
    // <div>
    //   <h1 className="text-3xl font-semibold underline">
    //     Welcome to Hangman
    //   </h1>
    //   <TextInputFormContainer onSubmit={(value) => console.log("Value coming from the hidden form is ", value)} />
    // </div>

    /**  
     * Creating pages for the game using Routes
     * In routes we can give path of pages of our website.
    */
    <>
      <div>
        <nav>Navigation bar</nav>
      </div>

      <Routes>
      <Route path="/Hangman/play" element={<PlayGame />} />
      <Route path="/Hangman/start" element={<StartGame />} />
      <Route path="*" element={<div>not found</div>} />   {/* If the path does not exist then this message will appear. */}
      </Routes>
    </>
  );
}

export default App;