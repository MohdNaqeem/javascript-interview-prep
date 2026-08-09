console.log(a)

function test() {
    console.log(a)
    var a = 20
    console.log(a)
}

var a = 10

test()

console.log(a)


/*

output:
1. undefined
2. undefined
3. 20
4. 10

During the global memory creation phase, a is initialized with undefined and test is stored as a function. During 
execution, the first console.log(a) prints undefined, and then the global a is assigned the value 10.

When test() is called, a new function execution context is created. Inside the function, var a is hoisted and 
initialized with undefined, so the first console.log(a) inside the function prints undefined. Then a is assigned 20, 
so the next console.log(a) prints 20.

After the function finishes, its execution context is removed from the call stack. The local a is no longer available, 
while the global a still contains 10. Therefore, the final console.log(a) prints 10.

*/