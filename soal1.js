function isArithmeticProgression(numbers) {
    let diff = Infinity
    for (let i = 1; i < numbers.length; i++) {
        diff = i === 1 ? numbers[i] - numbers[i-1] : diff
        if(numbers[i] - numbers[i-1] !== diff) {
            return false
        }
    }
    return true
}

console.log("-------------Soal 1--------------");
console.log(isArithmeticProgression([1,2,3,4,5,6]));
console.log(isArithmeticProgression([2,4,6,12,24]));
console.log(isArithmeticProgression([2,4,6,8]));
console.log(isArithmeticProgression([2,6,18,54]));
console.log(isArithmeticProgression([1,2,3,4,7,9]));