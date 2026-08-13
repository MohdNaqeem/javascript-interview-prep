var x = 1;

function test() {
  console.log(x); // undefined

  var x = 2;

  function inner() {
    console.log(x); // 2
  }

  inner();

  var x = 3;

  console.log(x); // 3
}

test();

console.log(x); // 1

/*
Output:
1. undefined
2. 2
3. 3
4. 1

Explanation:
During the global memory creation phase, x is initialized with undefined and test is stored as a function. During execution, the global x is assigned 1.

When test() is called, the local var x is hoisted and initialized with undefined, so the first console.log() prints undefined.

The statement var x = 2 assigns 2 to the local x. When inner() is called, it does not have its own x, so it looks in its outer scope and finds the local x with value 2.

Later, var x = 3 refers to the same function-scoped variable and changes its value from 2 to 3. Therefore, the next console.log() prints 3.

After test() finishes, the global x remains 1, so the final console.log() prints 1.
*/