# Fill.posArray

## Availability

Flash MX 2004.

## Description

Property; an array of integers, each in the range of zero to 255, indicating the position of the corresponding color. This property is available only if the value of the [Fill.style](../Fill_object/Fill9.md) property is either "radialGradient" or "linearGradient".

## Example

The following example specifies the colors to use in a linear gradient for the current selection:

```javascript
var fill = fl.getDocumentDOM().getCustomFill();
fill.style = "linearGradient";
fill.colorArray = [0x00ff00, 0xff0000, 0x0000ff];
fill.posArray = [0, 100, 200];
fl.getDocumentDOM().setCustomFill(fill);
```
