# Document.setTaggedSwatchAtIndex()

## Availability

Animate 2020.

## Usage

Document.setTaggedSwatchAtIndex(oldSwatchIndex:int, newSwatch:Object [,palette:int ]).

## Parameters

**oldSwatchIndex** `integer`; Specifies the index of the tagged swatch to update.

**newSwatch** `Swatch`; Swatch object to replace with.

**palette** `integer?0`; An optional integer that specifies the index of the tagged swatch palette, default value is 0.

## Returns

Nothing.

## Description

Method; Replace the tagged swatch with the given index to the given new swatch object.

## Example

The following example replace the tagged swatch with the given index 0 to the given new swatch object swatch1.

```javascript
var document = fl.getDocumentDOM();
var swatch1 = new Object();
var fill = document.getCustomFill();
fill.color = "#FF00FF";
fill.style = "solid";
swatch1.fill = fill;
swatch1.name = "solid_swatch";
document.setTaggedSwatchAtIndex(0, swatch1);
```

## See also

[Document.setTaggedSwatchByName()](../Document_object/Document6068.md)
