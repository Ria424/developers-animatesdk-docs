# Stroke.dotSpace

## Availability

Flash MX 2004.

## Description

Property; an integer that specifies the spacing between dots in a dotted line. This property is available only if the stroke.style property is set to dotted. See [Stroke.style](../Stroke_object/Stroke20.md).

## Example

The following example sets the dotSpace property to 3 for a stroke style of dotted:

```javascript
var myStroke = fl.getDocumentDOM().getCustomStroke();
myStroke.style = "dotted";
myStroke.dotSpace= 3;
fl.getDocumentDOM().setCustomStroke(myStroke);
```
