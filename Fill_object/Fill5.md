# Fill.linearRGB

## Availability

Flash 8.

## Description

Property; `boolean`; A boolean value that specifies whether to render the fill as a linear or radial RGB gradient. Set this property to true to specify a linear interpolation of a gradient; set it to false to specify a radial interpolation of a gradient. The default value is false.

## Example

The following example specifies that the gradient of the current selection should be rendered with a linear RGB:

```javascript
var fill = fl.getDocumentDOM().getCustomFill();
fill.linearRGB = true;
fill.style = "radialGradient";
fill.colorArray = ["#00ff00","#ff00ff"];
fill.posArray = [0, 255];
fill.focalPoint = 100;
fill.linearRGB = true;
fl.getDocumentDOM().setCustomFill(fill);
```
