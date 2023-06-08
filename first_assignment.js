//By Fent Methika 8/6/2023
const input_num = [1,2,3,4,5,6,7,8,9,15];

function checkBangBoom(num) {
    if ((num % 3 == 0)&&(num % 5 == 0)) {
        console.log("BANGBOOM");
    }
    else if (num % 3 == 0) {
      console.log("BANG");
    }
    else if (num % 5 == 0) {
        console.log("BOOM");
      }
    else{
        console.log("MISS");
    }
}
console.log("your number: ",input_num);
console.log(input_num.filter(checkBangBoom));
