const fibonacci = function(num) {
    let array = [1, 1];
    let cleanNum = parseInt(num);
    if (cleanNum === 0) {
        return 0;
    } else if (cleanNum < 0) {
        return 'OOPS';
    } else {
        for (let i = 2; i < cleanNum; i++) {
        array.push(array[i - 2] + array[i - 1]);
        }
    }
    return array[array.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
