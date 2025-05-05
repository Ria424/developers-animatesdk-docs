# Document.punch()

## Availability

Flash 8.

## Usage

Document.punch()

## Parameters

None.

## Returns

Nothing.

## Description

Method; Uses the top selected drawing object to punch through all selected drawing objects underneath it. If no objects are selected, calling this method results in an error and the script breaks at that point.

## Example

The following example punches through drawing objects underneath the selected drawing object:

```javascript
fl.getDocumentDOM().punch();
```

## See also

- [Document.crop()](../Document_object/Document37.md)
- [Document.deleteEnvelope()](../Document_object/Document41.md)
- [Document.intersect()](../Document_object/Document97.md)
- [Document.union()](../Document_object/Document6120.md)
- [Shape.isDrawingObject](../Shape_object/Shape6.md)
