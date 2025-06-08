# Document.enableFilter()

## Availability

Flash 8.

## Usage

Document.enableFilter(filterIndex)

## Parameters

### **filterIndex**

#### Type

```typescript
number
```

#### Description

An integer specifying the zero-based index of the filter in the Filters list to enable.

## Returns

Nothing.

## Description

Method; Enables the specified filter for the selected objects.

## Example

The following example enables the second filter of the selected objects:

```javascript
fl.getDocumentDOM().enableFilter(1);
```

## See also

- [Document.addFilter()](../Document_object/Document3.md)
- [Document.changeFilterOrder()](../Document_object/Document29.md)
- [Document.disableFilter()](../Document_object/Document47.md)
- [Document.enableAllFilters()](../Document_object/Document58.md)
- [Document.getFilters()](../Document_object/Document79.md)
- [Document.removeFilter()](../Document_object/Document270.md)
- [Filter object](../Filter_object/Filter_summary.md)
