# CompiledClipInstance.colorRedAmount

## Availability

Adobe Animate.

## Description

Property; `integer`; An integer that either reduces or increases the red tint by a constant amount. This value is added to the current value. Valid values are -255 to 255.

This setting is the same as selecting `Color > Advanced` in the Instance Property Inspector.

## Example

The following example illustrates use of this property:

```javascript
// change the colorRedAmount of the first element in the first frame, top layer
fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].colorRedAmount = 100;
// change the colorRedAmount of the selected symbol instance
fl.getDocumentDOM().selection[0].colorRedAmount = 255;
```
