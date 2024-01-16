function threeStepsAB(txt) {
    const pattern = /(a...b|b...a)/
    return pattern.test(txt)
}

console.log("-------------Soal 2--------------");
console.log(threeStepsAB('lane borrowed'));
console.log(threeStepsAB('i am sick'));
console.log(threeStepsAB('you are boring'));
console.log(threeStepsAB('barbarian'));
console.log(threeStepsAB('bacon and meat'));