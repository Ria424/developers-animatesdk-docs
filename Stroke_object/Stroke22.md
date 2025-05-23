# Stroke.variation

## Availability

Flash MX 2004.

## Description

Property; a string that specifies the variation of a stippled line. This property is available only if the stroke.style property is set to stipple (see [Stroke.style](../Stroke_object/Stroke20.md)). Acceptable values are "one size", "small variation", "varied sizes", and "random sizes".

## Example

The following example sets the variation property to random sizes for a stroke style of stipple:

```javascript
var myStroke = fl.getDocumentDOM().getCustomStroke();
myStroke.style = "stipple";
myStroke.dotSpace= 3;
myStroke.variation = "random sizes";
myStroke.density = "sparse";
fl.getDocumentDOM().setCustomStroke(myStroke);
```
