# Element.matrix

## Availability

Flash MX 2004.

## Description

Property; `Matrix`; A matrix has properties *a, b, c, d, tx, and ty*. The *a, b, c,* and *d* properties are floating-point values; the tx and ty properties are coordinates. See [Matrix object](../Matrix_object/Matrix_summary.md).

## Example

The following example moves the specified element by 10 pixels in x and 20 pixels in y:

```javascript
var mat = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].matrix;
mat.tx += 10;
mat.ty += 20;
fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].matrix = mat;
```
