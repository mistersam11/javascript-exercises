const findTheOldest = function(arr) {
    const date = new Date();
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].yearOfDeath === undefined) {
            arr[i].yearOfDeath = date.getFullYear();
        }
        arr[i].age = arr[i].yearOfDeath - arr[i].yearOfBirth;
    }
    let sorted = arr.sort((a, b) => b.age - a.age);
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
