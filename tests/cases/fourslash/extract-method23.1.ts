/// <reference path='fourslash.ts' />

//// declare namespace Foo {
////     const x = /*start*/3/*end*/;
//// }

goTo.select('start', 'end')

verify.not.refactorAvailable('Extract Method');

// edit.applyRefactor('Extract Method', "scope_0");

verify.currentFileContentIs(`declare namespace Foo {
    const x = 3;
}`);

// Actual: "declare·namespace·Foo·{↓
// ····const·x·=·newFunction();↓
// ¶↓
// ····function·newFunction()·{¶↓
// ········return·3;¶↓
// ····}¶↓
// }"