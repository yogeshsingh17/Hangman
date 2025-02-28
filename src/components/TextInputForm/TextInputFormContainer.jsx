// Container component of the TextInputForm

import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer({ onSubmit }){
    const [value, setValue] = useState('');
    const [inputType, setInputType] = useState('password');

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form submitted", value);
        onSubmit?.(value);      // If onSubmit is present, call it with the value.
    }

    function handleTextInputChange(event){
        console.log("Text input changed");
        console.log(event.target.value);    //This will return the value entered by the user on the console.
        setValue(event.target.value)        //Whenever i type something it will update the value.
    }

    return (
        // alling the presentation layer component.

        <TextInputForm
            handleFormSubmit = {handleFormSubmit}
            inputType = {inputType}
            handleTextInputChange = {handleTextInputChange}
            value = {value}
            setInputType = {setInputType}
        />
    )

}

export default TextInputFormContainer;