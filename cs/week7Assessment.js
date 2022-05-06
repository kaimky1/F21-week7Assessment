const addToZero = (arr) => {
    for (let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){if(arr[i] + arr[j] === 0){
            return true;
        }
    }
  }
  return false;
}
//O(n^2)

const hasUniqueCharacters = (string) => {
    for (let i = 0; i < string.length; i++){
        for (let j = i + 1; j < string.length; j++){
            if(string[i] === string[j]){
                return false;
            }
        }
     }
     return true;
}
console.log(hasUniqueCharacters('Moonday'));

//O(n^2)

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const isPangram = (str) => {
    for(let i = 0; i < alphabet.length; i++){
        for(let j = 0; j < str.length; j++){
            if(alphabet[i] == str[j]){
                alphabet.splice(alphabet[j], 1)
                console.log(alphabet)
                i--;
            }
        }
    }
    if(alphabet.length == 0){
        return true;
    }
    return false;
}

console.log(isPangram('the quick brown fox jumped over the lazy dog'))

//O(n^2) I need to get better at writing faster code!

const findLongestWord = (arr) => {
    let longestWord = arr[0].length;
    for(let i = 1; i < arr.length; i++){
        if(arr[i].length > longestWord){
            longestWord = arr[i].length;
        }
    }
    return longestWord
}

console.log(findLongestWord(["hi", "hello"]))

//O(n)