# SymbolInstance.tintPercent

## Availability

Adobe Animate.

## Description

Read-only property; When the Color Effect Property Inspector is using style tint (colorMode == 'tint'), then return the tint percentage from -100 to 100. Otherwise using this property results in an error.

## Example

The following illustrates use of the tintPercent property:

```javascript
var elem = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
if (elem.colorMode = "tint") {
    fl.trace(elem.tintColor);
    fl.trace(elem.tintPercent);
}
```
