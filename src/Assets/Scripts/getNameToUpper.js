export const getNameToUpper = (name) => {
    const firstLetterUpper = name
    .toLowerCase() //makes all letters lowercase
    .split(' ') //splits all words where there is a whitespace, and puts all words in a array
    .map(word => { //maps trough the array 
        return word.charAt(0).toUpperCase() + word.slice(1); //takes first char of all words in array and makes uppercase
    })
    .join(' ') //joins every word from the array and puts a whitespace between them
    return firstLetterUpper
}
