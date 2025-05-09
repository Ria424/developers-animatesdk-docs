# Stroke.dash1

## Availability

Flash MX 2004.

## Description

Property; an integer that specifies the lengths of the solid parts of a dashed line. This property is available only if the stroke.style property is set to dashed(see [Stroke.style](../Stroke_object/Stroke20.md)).

## Example

The following example sets the dash1 and dash2 properties for a stroke style of dashed:

```javascript
var myStroke = fl.getDocumentDOM().getCustomStroke();
myStroke.style = "dashed";
myStroke.dash1 = 1;
myStroke.dash2 = 2;
fl.getDocumentDOM().setCustomStroke(myStroke);
```
