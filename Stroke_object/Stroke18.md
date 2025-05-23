# Stroke.space

## Availability

Flash MX 2004.

## Description

Property; a string that specifies the spacing of a hatched line. This property is available only if the stroke.style property is set to hatched (see [Stroke.style](../Stroke_object/Stroke20.md)). Acceptable values are "very close", "close", "distant", and "very distant".

## Example

The following example sets the space property to close for a stroke style of hatched:

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
