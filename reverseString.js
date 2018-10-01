const reverseString = (s) => (s === '') ? '' : reverseString(s.substr(1)) + s.charAt(0)
const reverseString = (str) => str.split("").reverse().join("")

const reverseString = (str) => {
    let newString = ""
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]
    }
    return newString;
}