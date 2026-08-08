console.log(a);

var a = 10;

console.log(a);

/*
output 

1. undefined
2. 10

*/

/*
Explanation 

During the memory creation phase, JavaScript hoists var a and initializes it with undefined. Therefore, the first 
console.log(a) prints undefined. Later, when execution reaches var a = 10, the value 10 is assigned to a. So the s
econd console.log(a) prints 10.

Unlike var, let and const are also hoisted but remain in the Temporal Dead Zone until their declaration is executed, 
so accessing them before that results in a ReferenceError.

---

We are accessing the variable before its assignment. During the memory creation phase, var a is hoisted and initialized 
with undefined, so the first console.log prints undefined.

During the memory creation phase, JavaScript allocates memory for variables and functions before executing the code. 
This behavior is known as hoisting.

They stay in the Temporal Dead Zone from the start of the block until their declaration is executed. Accessing them 
during this period throws a ReferenceError.

*/