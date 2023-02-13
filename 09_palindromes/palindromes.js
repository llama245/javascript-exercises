const palindromes = function (string) {

    const palindrome = string.toLowerCase().replace(/[^a-z]/g, "");
    return (palindrome 
        .split("")
        .reverse("")
        .join("") == palindrome);
};

// Do not edit below this line
module.exports = palindromes;
