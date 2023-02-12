const add = function(a, b) {
  return a + b; 
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(nums) {
  const sum1 = nums.reduce((accumulator, current) => {
    return accumulator + current;
 }, 0);
 return sum1;
	
};

const multiply = function(nums) {

  return nums.length 
    ? nums.reduce((accumulator, nextItem) =>
    accumulator * nextItem)
    : 1;

};

const power = function(a,b) {
  return Math.pow(a, b)
	
};

const factorial = function(number) {
  let result = number;

  if (number === 0 || number === 1) {
    return 1
  }
  
  while (number > 1){
    number --;
    result *= number;
  }
  return result;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
