// Presentation Component

import { useState } from "react";
import Button from "../Button/button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ handleFormSubmit, inputType, handleTextInputChange, value, setInputType }){

    const [toggle, setToggle] = useState(false);

    return (
        <form className="flex items-end" onSubmit={handleFormSubmit}>     {/* every form has a onSubmit eventListener
                                                            i.e. what happens when a form is submitted. 
                                                            For this we need to take a prop */}
            <div className="flex-1 mr-2">
                <TextInput 
                    label="Enter a word or phrase" 
                    type={inputType}
                    onChange={handleTextInputChange} 
                    value={value}
                />
            </div>

            <div>
                <Button 
                    styleType="warning"
                    text={inputType === 'password' ? 'Show' : 'Hide'}
                    onClickHandler={() => {
                        setInputType(inputType === 'password' ? 'text' : 'password')
                    }}
                />
            </div>

            <div>
                <Button
                    text="Ok"
                    buttonType="submit"
                />
            </div>

            <div>
                <button
                    onClick={(event) => {
                        event.preventDefault();
                        setToggle(!toggle);
                    }}
                    style={{backgroundColor : toggle ? 'red' : 'blue'}}
                >
                    Good morning
                </button>
            </div>
        </form>
    )

}

export default TextInputForm;