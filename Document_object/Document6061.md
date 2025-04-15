## Document.getTaggedSwatchAtIndex()

#### Availability

Animate 2020.

#### Usage

document.getTaggedSwatchAtIndex(index:int [,palette:int ])

#### Parameters

**index** `integer`; It is an integer that specifies the index of the tagged swatch.

**palette** `integer?0`; It is an optional integer that specifies the index of the tagged swatch palette, default value is 0.

#### Returns

`Swatch`; Swatch object.

#### Description

Method; returns the Tagged Swatch with the given index.

#### Example

The following example returns the tagged swatch at index 0.

```javascript
var document = fl.getDocumentDOM();
var swatch = document.getTaggedSwatchAtIndex(0);
```

#### See also

- [Document.getTaggedSwatchByName()](../Document_object/Document6062.md)
- [Document.getTaggedSwatchesPaletteList()](../Document_object/Document6063.md)
- [Document.getTaggedSwatches()](../Document_object/Document6064.md)
