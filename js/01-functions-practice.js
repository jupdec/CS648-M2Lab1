
//STEP 1
function halfnumber(num) {
    "use strict";
    if (isNaN(num)){
        window.console.log("Please enter a valid number");
    }
    var ans = num/2;
    window.console.log("Half of " + num + " is " + ans);
    return ans;
}
halfnumber(6);
//STEP 2
function squareNumber(num) {
    "use strict";
    if (isNaN(num)){
        window.console.log("Please enter a valid number");
    }
    var ans = num*num;
    window.console.log("The result of squaring the number " + num +  " is " + ans);
    return ans;
}
squareNumber(8);

//STEP 3
function percentOf(num1, num2) {
    "use strict";
    if (isNaN(num1) || isNaN(num1)){
        window.console.log("Please enter a valid number");
    }
    var ans = num1*100/num2;
    window.console.log(num1 + " is " + ans + "% of " + num2);
    return ans;
}
percentOf(6,8);
//STEP 4
function findModulus(num1, num2) {
    "use strict";
    if (isNaN(num1) || isNaN(num1)){
        window.console.log("Please enter a valid number");
    }
    var ans = num1%num2;
    window.console.log(ans + " is the modulus of " + num1 + " and " + num2 + ".");
    return ans
}
findModulus(8,2);

function newSum(){
    "use strict";
    var inp = window.prompt("Enter Numbers separated by commas");
    var num = inp.split(',');
    var sum =0;
    for(var i=0;i<num.length; i++){
        sum =    sum + parseInt(num[i]);
    } 
    window.console.log("Sum of all the numbers is " + sum);
    return sum
}
newSum();