# Shape.isDrawingObject

## Availability

Flash 8.

## Description

Read-only property; if true, the shape is a drawing object.

## Example

The following example stores the first selected object in the sel variable and then uses the [Element.elementType](../Element_object/Element1.md) and
shape.isDrawingObject properties to determine if the selected item is a drawing object:

```javascript
var sel = fl.getDocumentDOM().selection[0];
var shapeDrawingObject = (sel.elementType == "shape") && sel.isDrawingObject;
fl.trace(shapeDrawingObject);
```

## See also

[Document.crop()](../Document_object/Document37.md), [Document.deleteEnvelope()](../Document_object/Document41.md), [Document.intersect()](../Document_object/Document97.md), [Document.punch()](../Document_object/Document230.md), [Document.union()](../Document_object/Document6120.md), [Shape.isGroup](../Shape_object/Shape8.md)
