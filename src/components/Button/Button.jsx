// function Button(){
//     return (
//         <>
//             <button 
//                 className="px-4 py-2 text-white transition-all bg-blue-500 border border-blue-700 rounded-lg hover:bg-blue-700 hover:border-blue-900"
//             >
//                 Click me {isEvenOrOdd(4)}
//             </button>
//             <br/>
//             <button>
//                 Submit
//             </button>
//         </>
//     );
// }

// function isEvenOrOdd(num){
//     return num % 2 === 0 ? "even" : "odd";
// }

// export default Button;

// function Button(){
//     return (
//         <>
//             {10*3}
//         </>
//     )
// }

// export default Button;

// This component is used in TextInputForm.jsx to create the form. This button is a reusable component.

import getButtonStyling from "./getButtonStyleType";

function Button({ text, buttonType, styleType, onClickHandler })
{
    return (
        <>
            <button 
               type= {buttonType}
               onClick={onClickHandler}     // creating a event listener.
               className={`px-4 py-2 ${getButtonStyling(styleType)} rounded-lg border text-white transition-all`}
            >
                {text}
            </button>  
        </>
    )
}

export default Button;