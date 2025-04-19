## Document.deleteEnvelope()

#### Availability

Flash 8.

#### Usage

Document.deleteEnvelope()

#### Parameters

None.

#### Returns

None.

#### Description

Method; Deletes the envelope (bounding box that contains one or more objects) from the selected objects. If no objects are selected, calling this method results in an error and the script breaks at that point.

#### Example

The following example deletes the envelope from the selected objects:

```javascript
fl.getDocumentDOM().deleteEnvelope();
```

#### See also

- [Document.crop()](../Document_object/Document37.md)
- [Document.intersect()](../Document_object/Document97.md)
- [Document.punch()](../Document_object/Document230.md)
- [Document.union()](../Document_object/Document6120.md)
- [Shape.isDrawingObject](../Shape_object/Shape6.md)
