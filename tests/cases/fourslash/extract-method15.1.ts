/// <reference path='fourslash.ts' />

//// function foo () {
////     var x = 3;
////     x = newFunction(x);
////     var y = 5;
////     /*start*/console.log(y);/*end*/
//// }
////
//// function newFunction(x: number) {
////     x++;
////     return x;
//// }

goTo.select('start', 'end')
verify.refactorAvailable('Extract Method');
edit.applyRefactor('Extract Method', "scope_0");
verify.currentFileContentIs(
`function foo () {
    var x = 3;
    x = newFunction(x);
    var y = 5;
    newFunction_1();

    function newFunction_1() { console.log(y); }
}

function newFunction(x: number) {
    x++;
    return x;
}`);

// Actual: "function·foo·()·{↓
// ····var·x·=·3;↓
// ····x·=·newFunction(x);↓
// ····var·y·=·5;↓
// ····newFunction();¶↓
// ¶↓
// ····function·newFunction()·{·console.log(y);·}¶↓
// }↓
// ↓
// function·newFunction(x:·number)·{↓
// ····x++;↓
// ····return·x;↓
// }"