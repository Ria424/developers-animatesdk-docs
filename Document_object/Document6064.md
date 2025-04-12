## Document.getTaggedSwatches()

#### Availability

Animate 2020.

#### Usage

document.getTaggedSwatches([palette:int ])

#### Parameters

**palette**:It is an integer that specifies the index of the tagged swatch palette,it is optional.Default value is 0.

#### Returns

Array of tagged swatches.

#### Description

Method;It returns array of tagged swatch objects.
swatch object has two property,
— [Fill object](../Fill_object/Fill_summary.md)

— name

#### Example

The following example returns the array of tagged swatches.

```javascript
var document = fl.getDocumentDOM();
var swatchArr = document.getTaggedSwatches();
```

#### See also

[Document.getTaggedSwatchByName()](../Document_object/Document6062.md)
[Document.getTaggedSwatchesPaletteList()](../Document_object/Document6063.md)
