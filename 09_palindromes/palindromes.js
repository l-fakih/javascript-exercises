const palindromes = function (string) {
    //filter the og string without the special character to be compared later
    let filteredString = string.toLowerCase().split("").filter(s => /^[a-z0-9]+$/i.test(s)).join("");
    //we will create a new variable and save the inverted string in it
    //will make it lowercase for easy comparison, split the string to array, reverse it
    //then use the filter method to remove any characters and then join as a string. used regex in this case
    let invertedString = string.toLowerCase().split("").filter(s => /^[a-z0-9]+$/i.test(s)).reverse().join("");
    //compare the final result with the original string
    if (invertedString == filteredString){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
