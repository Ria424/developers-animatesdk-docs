## SymbolItem.scalingGridRect

#### Availability

Flash 8.

#### Usage

SymbolItem.scalingGridRect

#### Description

Property; `Rectangle`; A Rectangle object that specifies the locations of the four 9-slice guides. For information on the format of the rectangle, see [Document.addNewRectangle()](../Document_object/Document10.md).

#### Example

The following example specifies the locations of the 9-slice guides:

```javascript
fl.getDocumentDOM().library.items[0].scalingGridRect = {left: 338, top: 237, right: 3859, bottom: 713};
```

#### See also

[SymbolItem.scalingGrid](../SymbolItem_object/SymbolItem6.md)
