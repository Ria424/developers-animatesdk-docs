# Fill.style

## Availability

Flash MX 2004. Value "bitmap" added in Flash CS4 Professional.

## Description

Property; a string that specifies the fill style. Acceptable values are "bitmap", "solid", "linearGradient", "radialGradient", and "noFill".
If this value is "linearGradient" or "radialGradient", the [Fill.colorArray](../Fill_object/Fill3.md) and [Fill.posArray](../Fill_object/Fill8.md) properties are also available. If this value is "bitmap", the [Fill.bitmapIsClipped](../Fill_object/Fill.md) and [Fill.bitmapPath](../Fill_object/Fill1.md) properties are also available.

## Example

The following example specifies the colors to use in a linear gradient for the current selection:

```javascript
var fill = fl.getDocumentDOM().getCustomFill();
fill.style= "linearGradient";
fill.colorArray = [0x00ff00, 0xff0000, 0x0000ff];
fill.posArray= [0, 100, 200];
fl.getDocumentDOM().setCustomFill(fill);
```
