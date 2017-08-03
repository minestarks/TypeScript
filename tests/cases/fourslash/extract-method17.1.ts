/// <reference path='fourslash.ts' />

//// function foo () {
////     var x = 3;
////     var y = /*start*/x++ + 5/*end*/;
//// }

goTo.select('start', 'end')
verify.refactorAvailable('Extract Method');
edit.applyRefactor('Extract Method', "scope_1");
verify.currentFileContentIs(
`function foo () {
     var x = 3;
     var y;
     ({ y, x } = newFunction(x));
}
function newFunction(x: number) {
    var y = x++ + 5;
    return { y, x };
}
`);

// Actual: "function·foo·()·{↓
// ····var·x·=·3;↓
// ····var·y·=·var·__return:·any;¶↓
// ····({·x,·__return·}·=·newFunction(x));¶↓
// ····return·__return;;↓
// }¶↓
// function·newFunction(x:·number)·{¶↓
// ····return·{·x,·__return:·x++·+·5·};¶↓
// ····return·{·x·};¶↓
// }¶↓
// "