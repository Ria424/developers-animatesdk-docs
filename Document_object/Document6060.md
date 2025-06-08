# Document.getIndexForTaggedSwatchesPalette()

## Availability

Animate 2020.

## Usage

Document.getIndexForTaggedSwatchesPalette(paletteName:string)

## Parameters

### **paletteName**

#### Type

```typescript
string
```

#### Description

A string that indicates tagged swatch palette name.

## Returns

`integer`; An integer that specifies the index of the palette.

## Description

Method; To get the Tagged Swatches palette index for given palette name.

## Example

The following example returns the index of tagged swatch palette "palette1".

```javascript
fl.trace(fl.getDocumentDOM().getIndexForTaggedSwatchesPalette("palette 1"));
```
