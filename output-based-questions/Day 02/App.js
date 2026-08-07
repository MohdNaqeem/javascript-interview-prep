console.log(a);
console.log(b);

var a = 10;
let b = 20;

console.log(a);
console.log(b);

/*

Output:
1. undefined
2. ReferenceError: Cannot access 'b' before initialization
3. Not executed
4. Not executed

*/

/*

Explanation: 

At the first console.log(a), the output is undefined because var variables are hoisted during the memory creation phase. 
JavaScript creates the variable a and initializes it with the value undefined before the execution phase begins. 
Therefore, when a is accessed before its assignment, it returns undefined.

At the second console.log(b), a ReferenceError is thrown because b is declared with let. Although let variables are also 
hoisted, they remain in the Temporal Dead Zone (TDZ) until their declaration statement is executed. Accessing b before 
that point results in a ReferenceError: Cannot access 'b' before initialization.

Since this ReferenceError is not handled, JavaScript immediately stops executing the remaining code. As a result, the 
third and fourth console.log() statements are never executed.

*/