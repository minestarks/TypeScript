/// <reference path='fourslash.ts' />

//// /*start*/"use strict"/*end*/;

goTo.select('start', 'end')

verify.not.refactorAvailable('Extract Method');

// edit.applyRefactor('Extract Method', "scope_0");

verify.currentFileContentIs(`"use strict";`);

// Actual: "newFunction();¶↓
// function·newFunction()·{¶↓
// ····return·"use·strict";¶↓
// }¶↓
// "