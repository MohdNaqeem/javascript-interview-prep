foo();

var foo = function () {
  console.log("Hello from Function Expression");
};

function foo() {
  console.log("Hello from Function Declaration");
}

foo();

/*
Output:
Hello from Function Declaration
Hello from Function Expression

*/

/*
Explanation 

During the memory creation phase, JavaScript hoists both the `var` variable and the function declaration. Since a 
function declaration and a `var` variable have the same name (`foo`), the function declaration is stored in memory. 
Therefore, the first `foo()` call executes the function declaration and prints "Hello from Function Declaration".

During the execution phase, the statement `var foo = function () {}` assigns a new function (function expression) to 
the existing `foo` variable. This replaces the function declaration. Therefore, the second `foo()` call executes the 
function expression and prints "Hello from Function Expression".
*/