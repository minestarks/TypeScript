/// <reference path='fourslash.ts'/>

//// function foo() {
////     if (true) {
////         {| "indentation": 8|}
////         return;
////         {| "indentation": 8|}
////     }
//// }

test.markers().forEach((marker) => {
    verify.indentationAtPositionIs(marker.fileName, marker.position, marker.data.indentation);
});
