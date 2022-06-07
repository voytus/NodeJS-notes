// printing stack traces
function foo() {
    console.log("foo"); //stdout "foo" then
    bar();              //call another f-n
}

function bar() {
    console.log("bar"); //stdout "bar"
    other();            //call other f-n

    // console.log("closing bar");
    // console.trace();
}

function other() {
    console.trace(); // prints all functions called in the stack up to this point
// make a call to print this stack
}

foo();
console.log();
// Top of the stack   : other()
// Middle of the stack: bar()
// Bottom of the stack: foo()