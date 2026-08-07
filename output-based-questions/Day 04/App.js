var a = 10;

function test() {
  console.log(a);

  var a = 20;

  console.log(a);
}

test();

console.log(a);

/*
Output:
1. undefined
2. 20
3. 20
*/

/*
Explanation :

During the global memory creation phase, JavaScript creates the global variable a and initializes it with undefined, 
then creates the function test. During execution, a is assigned the value 10.

When test() is called, a new function execution context is created. Inside this function, var a is hoisted and initialized 
with undefined. Therefore, the first console.log(a) prints undefined because the local variable shadows the global 
variable.

Next, the local variable a is assigned the value 20, so the second console.log(a) prints 20.

After the function finishes, its execution context is destroyed. The local variable a no longer exists. Therefore, the 
final console.log(a) accesses the global variable, whose value is still 10.

*/