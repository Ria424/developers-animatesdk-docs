## Document.getTaggedSwatches()

#### Availability

Animate 2020.

#### Usage

document.getTaggedSwatches([palette])

#### Parameters

**palette** `integer`; An integer that specifies the index of the tagged swatch palette,it is optional.Default value is 0.

#### Returns

Array of tagged swatches.

#### Description

Method; `Swatch`; It returns array of tagged swatch objects.

Swatch object has two property,

- [Fill object](../Fill_object/Fill_summary.md)
- name

#### Example

The following example returns the array of tagged swatches.

```javascript
var doc = fl.getDocumentDOM();
var swatchArr = doc.getTaggedSwatches();
```

#### See also

- [Document.getTaggedSwatchByName()](../Document_object/Document6062.md)
- [Document.getTaggedSwatchesPaletteList()](../Document_object/Document6063.md)
