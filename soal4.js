function arrSum(arr) {
    let sumMax = -Infinity
    let sumArr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j <= arr.length; j++) {
            const slicedArr = arr.slice(i, j)
            const sum = slicedArr.reduce((total, el) => total + el)
            if(sumMax < sum) {
                sumArr = slicedArr
                sumMax = sum
            }
        }
    }
    const result = []
    result.push(sumArr)
    result.push(sumMax)
    console.log(result);
}

arrSum([-2, -3, 4, -1, -2, 1, 5, -3])