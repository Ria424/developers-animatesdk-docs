# Fill.colorArray

## Availability

Flash MX 2004.

## Description

Property; an array of colors in the gradient, expressed as integers. This property is available only if the value of the
fill.style property is either "radialGradient" or "linearGradient". See [Fill.style](../Fill_object/Fill9.md)

## Example

The following example displays the color array of the current selection, if appropriate, in the Output panel:

```javascript
var fill = fl.getDocumentDOM().getCustomFill();
fill.style = "linearGradient";
fill.colorArray = ["#00ff00", "#ff00ff"];
fill.posArray = [0, 255];
fl.getDocumentDOM().setCustomFill(fill);
```
