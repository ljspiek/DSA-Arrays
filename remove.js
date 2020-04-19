function remove(str, char) {
    const map = Array.prototype.map

    //create array of each input
    const charArray = map.call(char, eachLetter => {
        return eachLetter
    })
    const strArray = map.call(str, eachLetter => {
        return eachLetter
    })
    console.log(charArray, strArray)

    //compare & remove input
    charArray.forEach(letter => {
        strArray.forEach((strLtr, index) => {
            if(letter === strLtr) {
                strArray.splice(index, 1)
            }
        })
    })

    //transform array to string - cannot use array.toString() since commas will remain
    const removedStr = strArray.reduce((acc, curr) => {
        return acc + curr
    })
    //Reduce explanation https://levelup.gitconnected.com/one-reduce-to-rule-them-all-504e1b790a83

    return removedStr


}

console.log(remove('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))