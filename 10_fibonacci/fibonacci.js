const fibonacci = function(number) {
    Number(number) 
    let i = 2;
    let limit = 100000;
    const fib = [0,1];
    
    for(i; i < limit; i++){
        fib[i] = fib[i-2] + fib[i-1];
        fib.push(fib[i]);
    };
    
    console.log(fib[number]);
};


fibonacci("6")
