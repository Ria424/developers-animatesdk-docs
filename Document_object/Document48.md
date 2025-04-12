## Document.disableOtherFilters()

#### Availability

Flash 8.

#### Usage

document.disableOtherFilters(enabledFilterIndex)

#### Parameters

**enabledFilterIndex** An integer representing the zero-based index of the filter that should remain enabled after other filters are disabled.

#### Returns

Nothing.

#### Description

Method; disables all filters except the one at the specified position in the Filters list.

#### Example

The following example disables all filters except the second filter in the list (index value of 1):

```javascript
fl.getDocumentDom().disableOtherFilters(1);
```

#### See also

[Document.addFilter()](../Document_object/Document3.md), [Document.changeFilterOrder()](../Document_object/Document29.md), [Document.disableAllFilters()](../Document_object/Document46.md), [Document.disableFilter()](../Document_object/Document47.md), [Document.enableFilter()](../Document_object/Document59.md), [Document.getFilters()](../Document_object/Document79.md), [Document.removeFilter()](../Document_object/Document270.md), [Filter object](../Filter_object/Filter_summary.md)
