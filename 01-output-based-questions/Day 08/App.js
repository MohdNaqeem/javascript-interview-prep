var a = 10

function test(){
    console.log(a)

    if(true){
        let a = 20;
        console.log(a)
    }

    console.log(a);
}

test();

console.log(a)

/*
Output:
1. 10
2. 20
3. 10
4. 10

Explanation:
During the global memory creation phase, `var a` is initialized with `undefined` and the `test` function is stored in 
memory. During execution, the global `a` is assigned the value `10`.

When `test()` is called, the first `console.log(a)` looks for `a` inside the function. Since there is no local `a`, 
JavaScript searches the outer scope and finds the global `a`, whose value is `10`.

The `if` block creates a new block scope. The `let a = 20` declaration creates a new block-scoped variable, so the 
`console.log(a)` inside the block prints `20`.

After the `if` block ends, its block-scoped `a` is no longer accessible. The next `console.log(a)` searches the function 
scope and then the global scope, finding the global `a` with the value `10`.

Finally, the last `console.log(a)` is executed in the global scope, so it also prints `10`.

*/

