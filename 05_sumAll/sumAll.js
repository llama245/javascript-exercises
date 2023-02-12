const sumAll = function(x,y) {

    if (x < 0 ) {
        return "ERROR"
    }

    else if (y < 0) {
        return "ERROR"
    }

    if (typeof x != 'number') {
        return "ERROR"
    }

    else if (typeof y != 'number') {
        return "ERROR"
    }

    let array = [ ]
    
    let value_x = x
    let value_y = y 
    sum = 0 

    if (x < y) {
        for (let i = value_x; i <= value_y; i ++) {
            sum += i;
            //array.push(i);

    }
    }

    else if (x > y) {
        for (let i = value_y; i <= value_x; i++) {
            sum += i
    }
    }
    

    return sum        
    

};

// Do not edit below this line
module.exports = sumAll;
