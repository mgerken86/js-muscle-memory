/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
    let i = 1
    const answerArr = []
    while (i <= end){
        answerArr.push(i)
        i += 2
    }
    return answerArr
}
console.log(oddRange(22))