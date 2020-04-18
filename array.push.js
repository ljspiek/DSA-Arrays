const memory = require('./memory')
const Array = require('./array')

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    

    arr.pop();
    arr.pop();
    arr.pop();
  
    
    length = arr.length
    for(let i = length-1; i >= 0; i--) {
        arr.remove(0)
        console.log(arr)
        
    } 
    arr.push(3)
    firstItem = arr.get(0)

    console.log(arr, firstItem, arr.length);
}

    
    main()

    //Array {length: 1, _capacity: 3, ptr: 0}
    //Array {length: 6, _capacity: 12, ptr: 6}

    //Array {length: 3, _capacity: 12, ptr: 6} pop - length is reduced, capacity remains the same

    //adding 'tauhida' is undefined - memory does not accept strings, only numbers
    //purpose of _resize is to increase memory more efficiently (using a ratio) instead of adding one for each addition

    