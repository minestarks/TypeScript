/// <reference path='fourslash.ts' />

//// /*start*/export var x = 3;/*end*/

goTo.select('start', 'end')

verify.not.refactorAvailable('Extract Method');

// edit.applyRefactor('Extract Method', "scope_0");

verify.currentFileContentIs(`export var x = 3;`);

// Actual: "newFunction();¶↓
// ¶↓
// function·newFunction()·{·export·var·x·=·3;·}¶↓
// "