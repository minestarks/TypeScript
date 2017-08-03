/// <reference path='fourslash.ts' />

//// class Foo {
////     static method() {
////         /*start*/return 1;/*end*/
////     }
//// }

goTo.select('start', 'end')

verify.refactorAvailable('Extract Method');

edit.applyRefactor('Extract Method', "scope_0");

verify.currentFileContentIs(`class Foo {
    static method() {
        return Foo.newFunction();
    }

    private static newFunction() { return 1; }
}`);

// Actual: "class·Foo·{↓
// ····static·method()·{↓
// ········return·this.newFunction();¶↓
// ····}↓
// ¶↓
// ····private·newFunction()·{·return·1;·}¶↓
// }"