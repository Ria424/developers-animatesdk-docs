# Stroke.strokeHinting

## Availability

Flash 8.

## Description

Property; a Boolean value that specifies whether stroke hinting is set on the stroke.

## Example

The following example enables stroke hinting for the stroke:

```javascript
var myStroke = fl.getDocumentDOM().getCustomStroke();
myStroke.strokeHinting = true;
fl.getDocumentDOM().setCustomStroke(myStroke);
```
