## Document.changeFilterOrder()

#### Availability

Flash 8.

#### Usage

document.changeFilterOrder(oldIndex, newIndex)

#### Parameters

**oldIndex** `integer`; An integer that represents the current zero-based index position of the filter you want to reposition in the Filters list.

**newIndex** `integer`; An integer that represents the new index position of the filter in the list.

#### Returns

Nothing.

#### Description

Method; changes the index of the filter in the Filters list. Any filters above or below *newIndex* are shifted up or down accordingly. For example, using the filters shown below, if you issue the command fl.getDocumentDOM().changeFilterOrder(3, 0), the filters are rearranged as follows:

| **Before** | **After** |
| --- | --- |
| blurFilter, dropShadowFilter, glowFilter, gradientBevelFilter | gradientBevelFilter, blurFilter, dropShadowFilter, glowFilter |

If you then issue the command fl.getDocumentDOM().changeFilterOrder(0, 2), the filters are rearranged as follows:

| **Before** | **After** |
| --- | --- |
| gradientBevelFilter, blurFilter, dropShadowFilter, glowFilter | blurFilter, dropShadowFilter, gradientBevelFilter, glowFilter |

#### Example

The following example moves the filter that is currently in the second position in the Filters list to the first position:

```javascript
fl.getDocumentDOM().changeFilterOrder(1, 0);
```

#### See also

[Document.addFilter()](../Document_object/Document3.md), [Document.disableFilter()](../Document_object/Document47.md), [Document.enableFilter()](../Document_object/Document59.md), [Document.getFilters()](../Document_object/Document79.md), [Document.removeFilter()](../Document_object/Document270.md), [Filter object](../Filter_object/Filter_summary.md)
