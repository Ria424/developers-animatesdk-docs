# Shape.isRectangleObject

## Availability

Flash CS3 Professional.

## Description

Read-only property; if true, the shape is a primitive Rectangle object (was created using the Rectangle Primitive tool).

## Example

The following example displays *"true"* if the first selected item is a primitive Rectangle object, *"false"* if it is not:

```javascript
var sel = fl.getDocumentDOM().selection[0];
fl.trace(sel.isRectangleObject);
```

## See also

[Shape.isOvalObject](../Shape_object/Shape9.md)
