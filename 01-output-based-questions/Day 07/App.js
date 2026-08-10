var x = 10

function outer() {
    var x = 20

    function inner() {
        console.log(x)
    }

    inner()
}

outer()

console.log(x)

/*

output:
1. 20
2. 10 

Explanation:

During the global memory creation phase, `x` is initialized with `undefined` and `outer` is stored as a function. 
During execution, the global `x` is assigned the value `10`.

When `outer()` is called, a new function execution context is created. Inside `outer`, the local variable `x` is hoisted 
and initialized with `undefined`, and `inner` is stored as a function. Then `x` is assigned the value `20`.

When `inner()` is called, it does not have its own `x`, so JavaScript looks for `x` in its outer scope. It finds the `x` 
from the `outer` function, whose value is `20`. Therefore, the first `console.log()` prints `20`.

After the function execution finishes, the final `console.log(x)` is executed in the global scope. The global `x` 
still has the value `10`, so it prints `10`.

*/