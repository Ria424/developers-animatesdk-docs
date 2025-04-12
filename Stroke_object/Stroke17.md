## Stroke.shapeFill

#### Availability

Flash 8.

#### Usage

stroke.shapeFill

#### Description

Property; a [Fill object](../Fill_object/Fill_summary.md) that represents the fill settings of the stroke.

#### Example

The following example specifies fill settings and then applies them to the stroke:

```javascript
var fill = fl.getDocumentDOM().getCustomFill();
fill.linearGradient = true;
fill.colorArray = [0x00ff00, 0xff0000, 0xfffff];
var stroke = fl.getDocumentDOM().getCustomStroke();
stroke.shapeFill = fill;
fl.getDocumentDOM().setCustomStroke(stroke);
```
