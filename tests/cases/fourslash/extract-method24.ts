/// <reference path='fourslash.ts' />

//// function foo() {
////     type T = {};
////     let x: T = /*start*/{}/*end*/;
//// }

goTo.select('start', 'end')

verify.refactorAvailable('Extract Method');

edit.applyRefactor('Extract Method', "scope_1");

verify.currentFileContentIs(`function foo() {
    type T = {};
    let x: T = newFunction();
}
function newFunction(): {} {
    return {};
}
`);

// Actual: "function·foo()·{↓
// ····type·T·=·{};↓
// ····let·x:·T·=·newFunction();↓
// }¶↓
// function·newFunction():·T·{¶↓
// ····return·{};¶↓
// }¶↓
// "