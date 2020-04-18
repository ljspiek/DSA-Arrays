function arrayFilter(arr, value) { 
    let filteredArr = [] 
    arr.forEach(item => { 
        if (item > value) { 
            filteredArr.push(item) 
        } 
    }) 
    return filteredArr }

console.log(arrayFilter([1, 2, 6, 7], 5))