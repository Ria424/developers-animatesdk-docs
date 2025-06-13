# Document.intersect()

## Availability

Flash 8.

## Usage

Document.intersect()

## Parameters

None.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Creates an intersection drawing object from all selected drawing objects. If no objects are selected, calling this method results in an error and the script breaks at that point.

## Example

The following example creates an intersection drawing object from all selected drawing objects:

```javascript
fl.getDocumentDOM().intersect();
```

## See also

- [Document.crop()](../Document_object/Document37.md)
- [Document.deleteEnvelope()](../Document_object/Document41.md)
- [Document.punch()](../Document_object/Document230.md)
- [Document.union()](../Document_object/Document6120.md)
- [Shape.isDrawingObject](../Shape_object/Shape6.md)
