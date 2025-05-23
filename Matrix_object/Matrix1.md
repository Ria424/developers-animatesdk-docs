# Matrix.b

## Availability

Flash MX 2004.

## Description

Property; a floating-point value that specifies the (0,1) element in the matrix. This value represents the vertical skew of a shape; it causes Anim to move the shape’s right edge along the vertical axis.
The matrix.b and matrix.c properties in a matrix represent skewing (see [Matrix.c](../Matrix_object/Matrix2.md)).

## Example

In the following example, you can set b and c to -1 and 0, respectively; these settings skew the object at a 45º vertical angle:

```javascript
var mat = fl.getDocumentDOM().selection[0].matrix; mat.b = -1;
mat.c = 0; fl.getDocumentDOM().selection[0].matrix = mat;
```

To skew the object back to its original shape, you can set b and c to 0. See also the [Matrix.a](../Matrix_object/Matrix.md) example.
