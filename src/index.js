module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 === 1) return false;	

  let arr = str.split(''),
   bracketArr = bracketsConfig,
   result = [];

  for(let i = 0; i < arr.length; i++) {
   for(let j = 0; j < bracketArr.length; j++) {
     if (result[result.length - 1] === bracketArr[j][0] && arr[i] === bracketArr[j][1]) {
       result.pop();
      } else if (arr[i] === bracketArr[j][0]) {
       result.push(arr[i]);
      }
    }
  }
  
  return result.length === 0
}