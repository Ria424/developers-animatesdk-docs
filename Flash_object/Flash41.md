# Flash.Math

## Availability

Flash MX 2004.

## Description

Read-only property; `Math`; the [Math object](../Math_object/Math_summary.md) provides methods for matrix and point operations.

## Example

The following example shows the transformation matrix of the selected object and its inverse:

```javascript
// Select an element on the Stage and then run this script.
var mat = fl.getDocumentDOM().selection[0].matrix;
for (var prop in mat) {
    fl.trace("mat." + prop + " = " + mat[prop]);
}

var invMat = fl.Math.invertMatrix(mat);
for (var prop in invMat) {
    fl.trace("invMat." + prop + " = " + invMat[prop]);
}
```
