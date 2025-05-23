# Stroke.jiggle

## Availability

Flash MX 2004.

## Description

Property; a string that specifies the jiggle property of a hatched line. This property is available only if the stroke.style property is set to hatched (see [Stroke.style](../Stroke_object/Stroke20.md)). Acceptable values are "none", "bounce", "loose", and "wild".

## Example

The following example sets the jiggle property to wild for a stroke style of hatched:

```javascript
var myStroke = fl.getDocumentDOM().getCustomStroke();
myStroke.style = "hatched";
myStroke.curve = "straight";
myStroke.space = "close";
myStroke.jiggle = "wild";
myStroke.rotate = "free";
myStroke.length = "slight";
myStroke.hatchThickness = "thin";
fl.getDocumentDOM().setCustomStroke(myStroke);
```
