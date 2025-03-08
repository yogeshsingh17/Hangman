export function getAllCharacteres(word, usedLetters){                   // This function will return a string with all the characters of the word that has been guessed so far. Lets say the word which need to be guessed is YOGESH.
    usedLetters = usedLetters.map(letter => letter.toUpperCase());      // This will change the letters to the upper case.
    const guessedLetters = new Set(usedLetters);                        // Creating new set of letters.
    const characters = word.toUpperCase().split('').map(char => {       // Here we are changing the word to be guessed to upper case letters and the splitting the word into single alphabets. And then mapping over it to check if the letter has been guessed correctly. If it is guessed correctly it is returned or else _ is returned.
        if(guessedLetters.has(char)){
            return char;
        }
        return '_';                                                     // Output will be an array of letters in the following way : ['_','O','_','_','_','H']
    })
    return characters.join(' ');                                        // Here we are returning the character with the words which has been guessed so far with the blank space for the letters which have not been guessed so far. We will join the above array and return the word. _ O _ _ _ H
}