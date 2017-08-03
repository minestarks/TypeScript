/// <reference path='fourslash.ts' />

//// function foo() {
////     const bar = { prop: 1 };
////     /*start*/bar.prop++;/*end*/
//// }

goTo.select('start', 'end')

edit.applyRefactor('Extract Method', "scope_1");

verify.currentFileContentIs(
`function foo() {
    const bar = { prop: 1 };
    newFunction(bar);
}
function newFunction(bar: { prop: number; }) {
    bar.prop++;
}
`);

// Actual: "function·foo()·{↓
// ····const·bar·=·{·prop:·1·};↓
// ····({·bar·}·=·newFunction(bar));¶↓
// }¶↓
// function·newFunction(bar:·{·prop:·number;·})·{¶↓
// ····bar.prop++;¶↓
// ····return·{·bar·};¶↓
// }¶↓
// "