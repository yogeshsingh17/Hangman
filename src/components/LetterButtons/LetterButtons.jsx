// const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const alphabets = new Array(26).fill('').map((e, index) =>
    String.fromCharCode(65 + index)                             //Usiing ASCII value.
)

function LetterButtons({ text ,usedLetters, onLetterClick }){                        //The function will take usedLetters prop so that we can get the letters we have already guessed separately and style them accordingly.
    
    const originalCharacters = new Set(text.toUpperCase().split(''));

    const selectedLetters = new Set(usedLetters.join('').toUpperCase().split(''));

    const buttonStyle = function(letter){
        if(selectedLetters.has(letter)){
            return `border border-red-700 ${originalCharacters.has(letter) ? 'bg-green-500' : 'bg-red-500'}`
        } else {
            return 'bg-gray-400 border border-gray-700 hover:bg-gray-500'
        }
    }

    const handleClick = function(event){
        const character = event.target.value;
        onLetterClick?.(character)
    }

    const buttons = alphabets.map(letter => {
        return (
            <button 
                key={`button-${letter}`}
                value={letter}
                disabled={selectedLetters.has(letter)}
                onClick={handleClick}
                className={`w-12 h-12 m-1 rounded-md focus:outline-none ${buttonStyle(letter)}`}
                
            >
                {letter}
            </button>
        )
    })

    return (
        <>
            {buttons}
        </>
    )
}

export default LetterButtons;