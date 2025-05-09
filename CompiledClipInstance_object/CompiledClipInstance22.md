# CompiledClipInstance.tintPercent

## Availability

Adobe Animate.

## Description

Read-only property; `integer`; A integer that, when the Color Effect Property Inspector is using style tint (colorMode == "tint"), returns the tint percentage from -100 to 100. Otherwise, using this property results in an error.

## Example

The following example illustrates use of this property:

```javascript
var elem = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
if (elem.colorMode = "tint") {
    fl.trace(elem.tintColor);
    fl.trace(elem.tintPercent);
}
```
