# Document.getTaggedSwatchByName()

## Availability

Animate 2020.

## Usage

Document.getTaggedSwatchByName(name:string).

## Parameters

**name** `string`; Specifies the name of the tagged swatch.

## Returns

`Swatch`; Swatch object.

## Description

Method; Returns the Tagged Swatch with the given name.

## Example

The following example returns the tagged swatch with name "swatch1".

```javascript
var document = fl.getDocumentDOM();
var swatch = document.getTaggedSwatchByName("swatch1");
```

## See also

- [Document.getTaggedSwatchesPaletteList()](../Document_object/Document6063.md)
- [Document.getTaggedSwatches()](../Document_object/Document6064.md)
