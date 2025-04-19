## Contour.fill

#### Availability

Flash CS4 Professional.

#### Usage

Contour.fill

#### Description

Property; `Fill`; A [Fill object](../Fill_object/Fill_summary.md).

#### Example

Assuming that you have a contour with a fill selected, the following example displays the contour’s fill color in the Output panel:

```javascript
var insideContour = fl.getDocumentDOM().selection[0].contours[1];
var insideFill = insideContour.fill;
fl.trace(insideFill.color);
```
