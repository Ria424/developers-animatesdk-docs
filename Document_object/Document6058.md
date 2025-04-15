## Document.addTaggedSwatch()

#### Availability

Animate 2020.

#### Usage

document.addTaggedSwatch(swatch:object [,index:int [,palette:int ]] )

#### Parameters

**swatch** `Object`; swatch object to add.

**index** `integer`; An optional integer that specifies the index where to add swatch.

**palette** `integer?0`; An optional integer that specifies the index of the tagged swatch palette. Default value is 0.

#### Returns

Nothing.

#### Description

Method; To add new tagged swatch with the given swatch object at the given index, index is optional,in case no index is given adds swatch to end of the tagged swatches.

#### Example

In the following example,adding new tagged swatch,swatch1 to end of the tagged swatches.

```javascript
var document = fl.getDocumentDOM();
var swatch1 = new Object();
var fill = document.getCustomFill();
fill.color = "#FF00FF";
fill.style = "solid";
swatch1.fill = fill;
swatch1.name = "solid_swatch";
document.addTaggedSwatch(swatch1);
```

#### See also

[Document.addTaggedSwatchWithColor()](../Document_object/Document6059.md)
