testArray = [5, 4, 3, 1, 2, 6]
console.log(testArray)


var median = function (arr) {
  var sortedArray= arr.sort();
  console.log(sortedArray)
  if (sortedArray.length%2===0) {
  	console.log("the first part equals")
  	console.log((sortedArray[sortedArray.length/2]))
  	console.log("the second part equals")
  	console.log((sortedArray[(sortedArray.length-2)/2]))
    return (((sortedArray[sortedArray.length/2])+(sortedArray[(sortedArray.length-2)/2]))/2) 
  }
  else  {
  	console.log("this is an odd array, it's length is ")
  	console.log(sortedArray.length)
  	console.log("add 1 and divide by two, you get ")
  	console.log((sortedArray.length-1)/2)
    return sortedArray[(sortedArray.length-1)/2];
}
}

console.log(median(testArray))