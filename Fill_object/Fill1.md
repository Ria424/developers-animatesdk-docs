# Fill.bitmapPath

## Availability

Flash CS4 Professional.

## Description

Property; a string that specifies the path and name of the bitmap fill in the Library. This property is available only if the value of the [Fill.style](../Fill_object/Fill9.md) property is "bitmap".

## Example

The following example sets the fill style of the specified item to a bitmap image in the Library:

```javascript
var fill = fl.getDocumentDOM().getCustomFill();
fill.style = "bitmap";
fill.bitmapPath = "myBitmap.jpg";
fl.getDocumentDOM().setCustomFill(fill);
```

## See also

[Fill.bitmapIsClipped](../Fill_object/Fill.md)
