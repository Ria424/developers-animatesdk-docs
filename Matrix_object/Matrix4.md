# Matrix.tx

## Availability

Flash MX 2004.

## Description

Property; a floating-point value that specifies the *x*-axis location of a symbol’s registration point (also *origin point* or
*zero point*) or the center of a shape. It defines the *x* translation of the transformation.
You can move an object by setting the matrix.tx and matrix.ty properties (see [Matrix.ty](../Matrix_object/Matrix5.md)).

## Example

In the following example, setting tx and ty to 0 moves the registration point of the object to point 0,0 in the document:

```javascript
var mat = fl.getDocumentDOM().selection[0].matrix;
mat.tx = 0;
mat.ty = 0;
fl.getDocumentDOM().selection[0].matrix = mat;
```
