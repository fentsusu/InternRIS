let vowel = ['a','e','i','o','u']
const str = "Hello WOrld";

const noVowel = str.replace(/[aeiouAEIOU]/g, ''); //g = global flag to do continuously
console.log(noVowel);
