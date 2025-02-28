import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";

function App(){
  return (
    <div>
      <h1 className="text-3xl font-semibold underline">
        Welcome to Hangman
      </h1>
      <TextInputFormContainer onSubmit={(value) => console.log("Value coming from the hidden form is ", value)} />
    </div>
  );
}

export default App;