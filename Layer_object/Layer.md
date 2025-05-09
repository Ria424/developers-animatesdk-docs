# Layer.animationType

## Availability

Flash Pro CS6.

## Description

Read-only property; `"none" | "motion object" | "IK pose"`; A string value indicating the animation type of the layer. Possible values include: "none", "motion object", "IK pose".

## Example

The following example returns the layer type of the first layer of the root timeline:

```javascript
var layer = fl.getDocumentDOM().getTimeline().layers[0];
fl.trace("animationType: " + layer.animationType);
```
