const fibonacci = function(number) {
    Number(number) 
    let i = 2;
    let limit = 100000;
    const fib = [0,1];
    
    if(number < 0){
        return "OOPS"
    }else{    
        for(i; i < limit; i++){
        fib[i] = fib[i-2] + fib[i-1];
        fib.push(fib[i]);
    };}
    
    return (fib[number]);
};



// Do not edit below this line
module.exports = fibonacci;
