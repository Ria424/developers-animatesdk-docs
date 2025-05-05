# Document.disableFilter()

## Availability

Flash 8.

## Usage

Document.disableFilter(filterIndex)

## Parameters

**filterIndex** `integer`; An integer representing the zero-based index of the filter in the Filters list.

## Returns

Nothing.

## Description

Method; Disables the specified filter in the Filters list.

## Example

The following example disables the first and third filters (index values of 0 and 2) in the Filters list from the selected objects:

```javascript
fl.getDocumentDOM().disableFilter(0);
fl.getDocumentDOM().disableFilter(2);
```

## See also

- [Document.addFilter()](../Document_object/Document3.md)
- [Document.changeFilterOrder()](../Document_object/Document29.md)
- [Document.disableAllFilters()](../Document_object/Document46.md)
- [Document.disableOtherFilters()](../Document_object/Document48.md)
- [Document.enableFilter()](../Document_object/Document59.md)
- [Document.getFilters()](../Document_object/Document79.md)
- [Document.removeFilter()](../Document_object/Document270.md)
- [Filter object](../Filter_object/Filter_summary.md)
