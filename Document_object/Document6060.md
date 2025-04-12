## Document.getIndexForTaggedSwatchesPalette()

#### Availability

Animate 2020.

#### Usage

document.getIndexForTaggedSwatchesPalette(paletteName:string).

#### Parameters

**paletteName**:It is a string that indicates tagged swatch palette name.

#### Returns

An integer that specifies the index of the palette.

#### Description

Method;To get the Tagged Swatches palette index for given palette name.

#### Example

The following example returns the index of tagged swatch palette "palette1".

```javascript
fl.trace(fl.getDocumentDOM().getIndexForTaggedSwatchesPalette("palette 1"));
```
