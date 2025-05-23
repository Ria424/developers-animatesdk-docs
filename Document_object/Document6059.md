# Document.addTaggedSwatchWithColor()

## Availability

Animate 2020.

## Usage

Document.addTaggedSwatchWithColor(color:string[,name:string [, index:int [, palette:int ]]])

## Parameters

**color** `string`; Specifies the color for which swatch is created like "#CCFF34".

**name** `integer?`; It is an optional integer that specifies the name of the tagged swatch.

**index** `integer?`; It is an optional integer that specifies the index where to add swatch.

**palette** `integer?0`; It is an optional integer that specifies the index of the tagged swatch palette, default value is 0.

## Returns

Nothing.

## Description

Method; To add new tagged swatch with the given color string and name at the given index. Name and index are optional, in case no name is given, adds a unique name by itself and in case no index is given ,adds swatch to end of the tagged swatches. Name is required for index argument.

## Example

The following example adds new tagged swatch for the color "#FF00FF".

```javascript
fl.getDocumentDOM().addTaggedSwatchWithColor("#FF00FF");
```

## See also

[Document.addTaggedSwatch()](../Document_object/Document6058.md)
