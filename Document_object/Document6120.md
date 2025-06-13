# Document.union()

## Availability

Flash 8.

## Usage

Document.union()

## Parameters

None.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Combines all selected shapes into a drawing object. If no objects are selected, calling this method results in an error and the script breaks at that point.

## Example

The following example combines all selected shapes into a drawing object:

```javascript
fl.getDocumentDOM().union();
```

## See also

- [Document.crop()](../Document_object/Document37.md)
- [Document.deleteEnvelope()](../Document_object/Document41.md)
- [Document.intersect()](../Document_object/Document97.md)
- [Document.punch()](../Document_object/Document230.md)
- [Shape.isDrawingObject](../Shape_object/Shape6.md)
