/**
 * 
 * @param {text} The word to be guessed.
 * @param {usedLetters} The array letters that have been guessed so far. 
 */

import { getAllCharacteres } from "./MaskedTextUtility";

function MaskedText({ text, usedLetters }){
    const letters = getAllCharacteres(text, usedLetters).split('');

    return (
        <>
            {letters.map((letter, index) => {
                return (
                    <span key={`letter-${index}`} className="inline-block mx-1">{letter}</span>
                )
            })}
        </>
    )
}

export default MaskedText;