# Element.rotation

## Availability

Flash CS3 Professional.

## Description

Property; `integer`; an integer or float value between -180 and 180 that specifies the object’s clockwise rotation, in degrees.

## Example

The following example sets the currently selected element’s rotation to 45 degrees:

```javascript
var element = fl.getDocumentDOM().selection[0];
fl.trace("Element rotation = " + element.rotation);
element.rotation = 45;
fl.trace("After setting rotation to 45: rotation = " + element.rotation);
```
