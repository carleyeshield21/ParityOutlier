// Thi is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
function findOutlier(integers){
  let evens = integers.filter(num => num % 2 == 0)
  let odds = integers.filter(num => num % 2 == 1)
  if(evens.length > odds.length){
    console.log(`In the array ${integers}`)
    console.log(`The outlier is ${odds}`)
  } else{
    console.log(`In the array ${integers}`)
    console.log(`The outlier is ${evens}`)
  }
}
findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])
console.log('========')
findOutlier([160, 3, 1719, 19, 11, 13, -21])
console.log('========')
findOutlier([1, 2, 3])
console.log('========')
findOutlier([2,6,8,10,3])
console.log('========')
findOutlier([0,0,3,0,0])
console.log('========')
findOutlier([1,1,0,1,1])