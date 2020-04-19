function array2D(arr) {
    const original = JSON.parse(JSON.stringify(arr))
    console.log(original)
    let newArr = arr

    original.map((row, rowI) => {
        row.map((item, arrI) => {
            if(item === 0) {
                newArr[rowI].forEach((num, i) => newArr[rowI][i] = 0)
                newArr.forEach(newRow => newRow[arrI] = 0)
            }
        })
    })

    return newArr
}

console.log(array2D([[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]]))