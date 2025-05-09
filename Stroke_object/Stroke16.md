# Stroke.scaleType

## Availability

Flash 8.

## Description

Property; a string that specifies the type of scale to be applied to the stroke. Acceptable values are "normal", "horizontal", "vertical", and "none".

## Example

The following example sets the scale type of the stroke to horizontal:

```javascript
var myStroke = fl.getDocumentDOM().getCustomStroke();
myStroke.scaleType = "horizontal";
fl.getDocumentDOM().setCustomStroke(myStroke);
```
