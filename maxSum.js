function maxSum(arr) {
    //keep track of current sum
    let currentSum = 0
    //keep track of maximum sum
    let maxiSum = 0

    for(let i = 0; i < arr.length; i++) {
        let currentNum = arr[i]

        currentSum = Math.max((currentSum + currentNum), 0)

        maxiSum = Math.max(currentSum, maxiSum)
    }

    return maxiSum
}

console.log(maxSum([4,6,-3,5,-3,1]))

//Math.max(a, b) returns the larger of the two values provided
//good reference: https://medium.com/@IndiraWilliams/max-sub-array-sum-javascript-f1303f979344