# Stroke.pattern

## Availability

Flash MX 2004.

## Description

Property; a string that specifies the pattern of a ragged line. This property is available only if the stroke.style property is set to ragged (see [Stroke.style](../Stroke_object/Stroke20.md)). Acceptable values are "solid", "simple", "random", "dotted", "random dotted", "triple dotted", and "random triple dotted".

## Example

The following example sets the pattern property to random for a stroke style of ragged:

```javascript
var myStroke = fl.getDocumentDOM().getCustomStroke();
myStroke.style = "ragged";
myStroke.pattern = "random";
fl.getDocumentDOM().setCustomStroke(myStroke);
```
