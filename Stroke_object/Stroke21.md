# Stroke.thickness

## Availability

Flash MX 2004.

## Description

Property; an integer that specifies the stroke size.

## Example

The following example sets the thickness property of the stroke to a value of 2:

```javascript
var myStroke = fl.getDocumentDOM().getCustomStroke();
myStroke.thickness = 2;
fl.getDocumentDOM().setCustomStroke(myStroke);
```
