const fibonacci = function (number) { 
    let i = 2
    let limit = 100000

    const fib = [0, 1]

    if(number < 0 ) {
        return "OOPS"
    }

    for (i; i < limit; i++) {
        
        fib[i] = fib[i-2] + fib[i-1];
        fib.push(fib[i]);
    }
    return fib[number]
}

console.log(fibonacci(25))



