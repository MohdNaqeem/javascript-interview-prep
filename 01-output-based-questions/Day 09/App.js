console.log(a)

let a = 10

function test(){
    console.log(a)
}

test();

/*
Output

1. Error : reference error "a" can not access before initilization
2. not executes(once we get reference error so program will stop)


During the memory creation phase, a is hoisted because it is declared with let, but it remains uninitialized in the 
Temporal Dead Zone. The test function is also stored in memory.

During execution, the first console.log(a) tries to access a while it is still in the TDZ, so JavaScript throws a 
ReferenceError: Cannot access 'a' before initialization. Since the error is not handled, execution stops immediately, so the remaining statements, including test(), are never executed.

*/
