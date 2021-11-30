/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0 ) return 1;

  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words,highest = 0) {

  if (words.length === 0 ) return highest;
  
  let current = words.pop().length;
  
  if(current > highest){
    highest = current;
  };

  return longest(words,highest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str,result="",idx=0) {
  if(idx === str.length) return result;

  if(idx % 2 === 0){
    result += str[idx]
  }

  return everyOther(str,result,idx + 1)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str,left=0,right=str.length-1) {
  if(left>=right) return true;

  if(str[left] !== str[right]){
    return false;
  }

  left ++;
  right --;

  return isPalindrome(str,left,right);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if(idx === arr.length) return -1;

  if(arr[idx] === val){
    return idx;
  }

  idx ++;

  return findIndex(arr,val,idx)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=0,result="") {
  if (result.length === str.length) return result;
  
  result += str[str.length-1-idx];

  idx ++;

  return revString(str,idx,result)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArray = [];
  for(let key in obj){
    if(typeof obj[key] === "string"){
      stringArray.push(obj[key]);
    }
    if(typeof obj[key] === "object"){
      stringArray.push(...gatherStrings(obj[key]))
    }
  }
  return stringArray
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
// [1,2,3,4,5,6,7,8,9]

function binarySearch(arr, val, idx,left=0,right=arr.length-1) {
  if(left > right ) {
    return -1;
  };
  idx = Math.floor((right + left) / 2);

  if (arr[idx] === val){
    return idx;
  }
   
  if(arr[idx] > val){
    right = idx - 1 ;
  }else{
    left = idx + 1;
  }
  return binarySearch(arr,val,idx,left,right)
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
