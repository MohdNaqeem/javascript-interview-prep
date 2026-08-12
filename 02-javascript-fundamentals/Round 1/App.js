// Q1 — var hoisting

console.log(a);

var a = 10;

console.log(a);

/*
Output:
1. undefined
2. 10

Explanation:

During the creation phase, the variable declared with var is hoisted and initialized with undefined. So internally we can 
understand the code like:

var a = undefined;

console.log(a);  // undefined

a = 10;

console.log(a);  // 10

At the first console, a already exists but its value is undefined.

Then during the execution phase, a gets the value 10.

*/

// ----------------------------------------------------------------------------------------------------------------------------

// Q2 — let and TDZ 

console.log(a);

let a = 10;

console.log(a);

/*
Output:
1. 
2. 

Explanation:

During the creation phase, the let variable a is hoisted and its binding is created, but it is not initialized with a 
value. Before execution reaches the let a = 10 declaration, the variable remains in the Temporal Dead Zone (TDZ).

When the first console.log tries to access a, JavaScript throws a ReferenceError because a is still inside the TDZ.

Once a ReferenceError occurs, the remaining code is not executed.

Therefore the second console.log() will not execute.
*/

// ----------------------------------------------------------------------------------------------------------------------------

// Q3 — Scope

var x = 10;

function test() {
    var x = 20;
    console.log(x);
}

test();

console.log(x);

/*
Output:
1. 20
2. 10

Explanation:

During the global creation phase:

var x = undefined

The function test is also created.

During the global execution phase:

x = 10

Then test() is called, so a new function execution context is created.

Inside the function, a new local variable x is created:

var x = undefined

Then during the execution phase:

x = 20

The console.log() inside the function accesses the local x, so it prints 20.

After the function finishes execution, its execution context is removed from the call stack.

The global x is still 10, so the second console.log() prints 10.

The x inside the function and the x outside the function are two different variables because var is function-scoped.
*/

// ----------------------------------------------------------------------------------------------------------------------------

// Q4 — var vs let

if (true) {
    var a = 10;
    let b = 20;
}

console.log(a);
console.log(b);

/*
Output:
1. 10
2. b is not defined

Explanation:
The if block creates a block scope.

The variable declared with var is function-scoped, so it is not restricted by the if block.

Therefore a can be accessed outside the if block.

The variable declared with let is block-scoped, so b exists only inside the if block.

Therefore b cannot be accessed outside the block.

Important:

var → function scoped
let → block scoped
const → block scoped

Also, var does NOT always mean global scope. It is only global when it is declared in the global scope.

*/

// ----------------------------------------------------------------------------------------------------------------------------

// Q5 — Type coercion
console.log(10 + "5");
console.log(10 - "5");
console.log("10" * 2);
console.log("10" + 2);

/*
Output:
1. 105
2. 105
3. 102
4. 102

Explanation:

In the first expression:

10 + "5"

The + operator can perform string concatenation.

Because one operand is a string, the number 10 is converted into a string.

"10" + "5" = "105"

In the second expression:

10 - "5"

The - operator performs numeric subtraction.

Therefore JavaScript converts the string "5" into the number 5.

10 - 5 = 5

In the third expression:

"10" * 2

The * operator performs numeric multiplication.

Therefore "10" is converted into the number 10.

10 * 2 = 20

In the fourth expression:

"10" + 2

Because + is being used with a string, JavaScript performs string concatenation.

"10" + "2" = "102"

Important:

Do not remember the rule as "if a string is present, everything becomes a string."

The important point is that + can perform either addition or string concatenation, while -, *, and / perform numeric operations with type conversion when necessary.
*/

// ----------------------------------------------------------------------------------------------------------------------------

// Q6 — == vs ===
console.log(5 == "5");
console.log(5 === "5");
console.log(false == 0);
console.log(false === 0);

/*
Output:
1. true
2. false 
3. false
4. true

Explanation:
== is called the loose equality operator.

It can perform type coercion before comparing the values.

5 == "5"

The string "5" is converted to the number 5.

So:

5 == 5

Therefore the result is true.

=== is called the strict equality operator.

It does not perform type coercion and checks both value and data type.

5 === "5"

The values look similar, but one is a number and the other is a string.

Therefore the result is false.

For:

false == 0

With ==, JavaScript performs type coercion.

false is converted to 0.

So:

0 == 0

Therefore the result is true.

For:

false === 0

The types are different:

false → boolean
0 → number

Therefore the result is false.

Important:

== → compares after possible type coercion
=== → compares without type coercion
*/

// ----------------------------------------------------------------------------------------------------------------------------

// Q7 — Truthy / falsy

if ("0") {
    console.log("A");
}

if (0) {
    console.log("B");
}

if ([]) {
    console.log("C");
}

if ({}) {
    console.log("D");
}

/*
Explanation:
"0" is a non-empty string, so it is truthy.

Therefore:

if ("0")

will execute and print A.

0 is a falsy value.

Therefore:

if (0)

will not execute, so B is not printed.

[] is an empty array, but an array is an object in JavaScript.

Objects are truthy, even when they are empty.

Therefore:

if ([])

will execute and print C.

{} is an empty object.

An empty object is also truthy.

Therefore:

if ({})

will execute and print D.

Important:

An empty string "" is falsy, but an empty array [] and empty object {} are truthy.

Falsy values include:

false
0
-0
0n
""
null
undefined
NaN

Most other values are truthy, including [] and {}.
*/

// ----------------------------------------------------------------------------------------------------------------------------

// Q8 — Scope + hoisting

var a = 10;

function test() {
    console.log(a);
    var a = 20;
}

test();

/*
Output:
1. undefined
2. 10

Explanation:
During the global creation phase:

var a = undefined

The function test is also created.

During the global execution phase:

a = 10

Then test() is called and a new function execution context is created.

Inside the function:

var a = undefined;

The local a is hoisted because it is declared with var.

Therefore the function can be understood as:

function test() {
    var a;

    console.log(a);

    a = 20;
}

At the time console.log(a) executes, the local a exists but its value is still undefined.

Therefore the output is:

undefined

The global a = 10 is not used because the function has its own local variable a.
*/

// ----------------------------------------------------------------------------------------------------------------------------

// Q9 — undefined
var a;

console.log(a);

a = 100;

console.log(a);

/*
Output:
1. undefined
2. 100

Explanation:
The statement:

var a;

declares the variable a.

Because a is declared using var, during the creation phase it is initialized with undefined.

Therefore the first console.log() prints undefined.

Then during execution:

a = 100;

assigns the value 100 to a.

Therefore the second console.log() prints 100.

So the flow is:

Declaration:
var a;

Initial value:
a = undefined;

Assignment:
a = 100;

Final output:

undefined
100

*/

// ----------------------------------------------------------------------------------------------------------------------------

// 10: What is hoisting in JavaScript?

/*
Answer 
Hoisting refers to the behavior where JavaScript creates bindings for declarations during the creation phase of an 
execution context before executing the code. var declarations are initialized with undefined, while function declarations 
are initialized with their function definition. let and const bindings are also created but remain unavailable during the 
Temporal Dead Zone until execution reaches their declaration.

*/