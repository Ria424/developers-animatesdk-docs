## Contour.orientation

#### Availability

Flash MX 2004.

#### Usage

Contour.orientation

#### Description

Read-only property; `integer`; An integer indicating the orientation of the contour. The value of the integer is -1 if the orientation is counterclockwise, 1 if it is clockwise, and 0 if it is a contour with no area.

#### Example

The following example traverses all the contours of the selected shape and shows the value of the orientation
property of each contour in the Output panel:

```javascript
var elt = fl.getDocumentDOM().selection[0];
elt.beginEdit();

var contourArray = elt.contours;
var contourCount = 0;
for (var i = 0; i < contourArray.length; i++) {
    var contour = contourArray[i];
    fl.trace("Next Contour, orientation:" + contour.orientation);
    contourCount++;
}

elt.endEdit();
```
