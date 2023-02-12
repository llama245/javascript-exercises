const reverseString = function(string) {

let text = ""

let length  = string.length

for (let i = length; i --;) {
    text += string[i]
}

return text

};

// Do not edit below this line
module.exports = reverseString;
