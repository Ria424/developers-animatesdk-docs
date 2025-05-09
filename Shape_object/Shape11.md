# Shape.members

## Availability

Flash CS4 Professional.

## Description

Read-only property; an array of objects in the currently selected group. This property is available only if the value of
`shape.isGroup` is true. Raw shapes in the group are not included in the `shape.members` array.

For example, if the group contains three drawing objects and three raw shapes, the shape.members array contains three entries, one for each of the drawing objects. If the group contains only raw shapes, the array is empty.

## Example

The following code displays the number of cubic segments of each drawing object in the currently selected group:

```javascript
var shapesArray = fl.getDocumentDOM().selection[0].members;
for (var i = 0; i < shapesArray.length; i++) {
    fl.trace(shapesArray[i].numCubicSegments);
}
```

## See also

[Shape.isGroup](../Shape_object/Shape8.md)
