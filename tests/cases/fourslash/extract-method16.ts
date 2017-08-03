/// <reference path='fourslash.ts' />

//// function foo () {
////     var x = 3;
////     /*start*/x++/*end*/;
//// }

goTo.select('start', 'end')
verify.refactorAvailable('Extract Method');
edit.applyRefactor('Extract Method', "scope_1");
verify.currentFileContentIs(
`function foo () {
    var x = 3;
    x = newFunction(x);
}
function newFunction (x: number) {
    x++;
    return x;
}
`);

// Actual: "function·foo·()·{↓
// ····var·x·=·3;↓
// ····newFunction(x);↓
// }¶↓
// function·newFunction(x:·number)·{¶↓
// ····return·x++;¶↓
// }¶↓
// "