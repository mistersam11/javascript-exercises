const sumAll = function(num1, num2) {
    let total = 0;
    let a;
    let b;
    if (!(num1 % 1 === 0) 
        | !(num2 % 1 === 0)
        | num1 < 0 
        | num2 < 0
        | !(typeof(num1) === 'number')
        | !(typeof(num2) === 'number' ) ) {
        return 'ERROR';
    } else if (num1 > num2) {
        a = num2;
        b = num1;
    } else {
        a = num1;
        b = num2;
    }

    for (let i = a; i <= b; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
