/// <reference path='fourslash.ts' />

//// class Foo {
////     readonly prop1: number;
////
////     constructor(x: number) {
////         /*start*/this.prop1 = 3;/*end*/
////     }
//// }

goTo.select('start', 'end')

verify.not.refactorAvailable('Extract Method');

// edit.applyRefactor('Extract Method', "scope_0");

verify.currentFileContentIs(`class Foo {
    readonly prop1: number;

    constructor(x: number) {
        this.prop1 = 3;
    }
}`);


// Actual: "class·Foo·{↓
// ····readonly·prop1:·number;↓
// ↓
// ····constructor(x:·number)·{↓
// ········this.newFunction();¶↓
// ····}↓
// ¶↓
// ····private·newFunction()·{·this.prop1·=·3;·}¶↓
// }"