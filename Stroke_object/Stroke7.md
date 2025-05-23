# Stroke.dotSize

## Availability

Flash MX 2004.

## Description

Property; a string that specifies the dot size of a stippled line. This property is available only if the stroke.style property is set to stipple (see [Stroke.style](../Stroke_object/Stroke20.md)). Acceptable values are "tiny", "small", "medium", and "large".

The following example sets the dotSize property to tiny for the stroke style of stipple:

```javascript
var myStroke = fl.getDocumentDOM().getCustomStroke();
myStroke.style = "stipple";
myStroke.dotSpace= 3;
myStroke.dotsize = "tiny";
myStroke.variation = "random sizes";
myStroke.density = "sparse";
fl.getDocumentDOM().setCustomStroke(myStroke);
```
