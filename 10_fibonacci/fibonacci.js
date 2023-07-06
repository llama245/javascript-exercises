const fibonacci = function(number) { 
    let i = 2;
    let limit = 100000;

    const fib = [0,1]
 
    
    for( i; i < limit; i++){
        fib[i] = fib[i-2] + fib[i-1];
        if(fib[i] < 0){
            fib.push(1)
        }
        else{
            fib.push(fib[i])
        }
        
    };
    return fib[number]
};



console.log(fibonacci(6))