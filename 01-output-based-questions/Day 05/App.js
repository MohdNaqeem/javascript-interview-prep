var x = 10;

function test() {
  console.log(x);

  if (true) {
    var x = 20;
  }

  console.log(x);
}

test();

console.log(x);

/*
Output:
1. undefined
2. 20
3. 10

Explnation:

During the global memory creation phase, x is initialized with undefined and test is stored as a function. During 
execution, the global x is assigned 10.

When test() is called, a new function execution context is created. The var x inside the function is hoisted and 
initialized with undefined, so the first console.log(x) prints undefined.

Since var is function-scoped, the var x inside the if block refers to the same local x. When x = 20 executes, the local 
variable becomes 20, so the second console.log(x) prints 20.

After the function finishes, its local execution context is removed. The global x still contains 10, so the final 
console.log(x) prints 10.


*/