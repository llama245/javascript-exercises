const fibonacci = function(number) { 
    let i = 1
    let limit = 100000

    const fib = [0]

    if(number < 0 ) {
        return "OOPS"
    }

    for (i; i < limit; i++) {
        
        fib[i] = fib[i-2] + fib[i-1];
        fib.push(fib[i])
        };

    
    return fib[number]
};

fibonacci(3)