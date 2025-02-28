// This function is used in Button.jsx to style the button.

function getButtonStyling(styleType){
    const primaryButtonStyling = " bg-blue-500 border border-blue-700 rounded-lg hover:bg-blue-700 hover:border-blue-900";
    const secondaryButtonStyling = "bg-gray-500 border border-gray-700 rounded-lg hover:bg-gray-700 hover:border-gray-900";
    const warningButtonStyling = "bg-yellow-500 border border-yellow-700 rounded-lg hover:bg-yellow-700 hover:border-yellow-900";
    const errorButtonStyling = "bg-red-500 border border-red-700 rounded-lg hover:bg-red-700 hover:border-red-900";

    if(styleType === "primary"){
        return primaryButtonStyling;
    }
    else if(styleType === "secondary"){
        return secondaryButtonStyling;
    }
    else if(styleType === "warning"){
        return warningButtonStyling;
    }
    else if(styleType === "error"){
        return errorButtonStyling;
    }
    else{
        return primaryButtonStyling;
    }
}

export default getButtonStyling;