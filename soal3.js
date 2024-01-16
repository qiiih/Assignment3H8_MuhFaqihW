function sumArray(arr, num) {
    const result = []
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]!==undefined) {
            for (let j = i+1; j < arr.length; j++) {
                if(arr[j]!==undefined && arr[i]+arr[j]===num) {
                    result.push([arr[i], arr[j]])
                    arr[i] = undefined
                    arr[j] = undefined
                    break
                }
            }
        }
    }
    console.log(result);
}

sumArray([2,1,4,3], 5)
sumArray([1,8,10,3], 11)