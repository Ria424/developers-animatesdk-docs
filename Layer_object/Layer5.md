# Layer.layerType

## Availability

Flash MX 2004.

## Description

Property; `"normal" | "guide" | "guided" | "mask" | "masked" | "folder"`; a string that specifies the current use of the layer; equivalent to the Type setting in the Layer Properties dialog box. Acceptable values are "normal", "guide", "guided", "mask", "masked", and "folder".

## Example

The following example sets the first layer in the timeline to type folder:

```javascript
fl.getDocumentDOM().getTimeline().layers[0].layerType = "folder";
```
