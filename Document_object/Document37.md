# Document.crop()

## Availability

Flash 8.

## Usage

Document.crop()

## Parameters

None.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Uses the top selected drawing object to crop all selected drawing objects underneath it. If no objects are selected, calling this method results in an error and the script breaks at that point.

## Example

The following example crops the currently selected objects:

```javascript
fl.getDocumentDOM().crop();
```

## See also

- [Document.deleteEnvelope()](../Document_object/Document41.md)
- [Document.intersect()](../Document_object/Document97.md)
- [Document.punch()](../Document_object/Document230.md)
- [Document.union()](../Document_object/Document6120.md)
- [Shape.isDrawingObject](../Shape_object/Shape6.md)
