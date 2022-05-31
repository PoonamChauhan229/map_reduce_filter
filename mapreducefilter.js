var arr=[1,2,3,4]

var result=arr.map((element)=>element*2)
console.log(result)

console.log(arr)

// even
var result1=arr.filter((element)=>element%2===0)
console.log(result1)

// 
var result5=result1.map((element)=>element*2)
console.log(result5)

// filter//odd
var result2=arr.filter((element)=>element%2!==0)
console.log(result2)

// reduce without acc value
var result3=arr.reduce((acc,value)=>acc+value)
console.log(result3)
// reduce with acc value
var result4=arr.reduce((acc,value)=>acc+value,100)
console.log(result4)

//all 3 methods in 1 
var result6=arr.filter((element)=>element%2===0).map((element)=>element*2).reduce((acc,value)=>acc+value)
console.log(result6)