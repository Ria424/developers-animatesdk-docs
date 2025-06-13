# Document.removeFilter()

## Availability

Flash 8.

## Usage

Document.removeFilter(filterIndex)

## Parameters

### **filterIndex**

#### Type

```typescript
number
```

#### Description

The zero-based index of the filter to remove from the selected objects.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Removes the specified filter from the Filters list of the selected objects.

## Example

The following example removes the first filter (index value 0) from the Filters list of the selected objects:

```javascript
fl.getDocumentDOM().removeFilter(0);
```

## See also

- [Document.addFilter()](../Document_object/Document3.md)
- [Document.changeFilterOrder()](../Document_object/Document29.md)
- [Document.disableFilter()](../Document_object/Document47.md)
- [Document.getFilters()](../Document_object/Document79.md)
- [Document.removeAllFilters()](../Document_object/Document240.md)
- [Filter object](../Filter_object/Filter_summary.md)
