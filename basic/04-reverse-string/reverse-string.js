function reverseString(str) {
    let revStr='';

    /* Solution 1: Using for loop */ 
    // for(let i=str.length-1; i>=0; i--){
    //     revStr += str[i];
    // }

    /* Solution 2: Using ES6 for...of Loop */
    // for(let char of str){
    //     revStr = char + revStr
    // }

    /* Solution 3: Using predefid JS array method */
    // revStr = str.split('').reverse().join('')

    /* Solution 4: Using recursion(normal function) */
    /* 
    Note: Here first it will add element to stack, after completing(reach to the base condition) it will start showing the reasut from the stack
    As we know stack works LIFO (last in, first out) priciple so which inseterd(pushed) to the stack in last will poped out first
    The above principle is called "Unwinding" 
    */
    // if(str === ''){
    //     return '';
    // }
    // revStr = reverseString(str.substr(1))+str.charAt(0)

    /* Solution 5: Using recursion(one line using turnary operator) */
    // revStr = str === '' ? '' : reverseString(str.substr(1))+str.charAt(0)

    /* Solution 6: Using reduce() method */
    revStr = str.split('').reduce( (revStr, char) => char + revStr )
    
    return revStr;
}
module.exports = reverseString;
