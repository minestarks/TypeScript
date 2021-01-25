/// <reference path='fourslash.ts' />

//// [/*1*/{
////     a: 1
//// }, {
////     }/*2*/]

format.setOption("PlaceOpenBraceOnNewLineForControlBlocks", false);

format.selection("1", "2")
//format.document(); // If you uncomment this line, the test passes

goTo.marker("2");
verify.currentLineContentIs("}]");

