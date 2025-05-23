# CompiledClipInstance.blendMode

## Availability

Adobe Animate.

## Description

Property; `"normal" | "layer" | "darken" | "multiply" | "lighten" | "screen" | "overlay" | "hardlight" | "add" | "subtract" | "difference" | "invert" | "alpha" | "erase"`; Specifies the blend mode. Valid blend modes are: normal, layer, darken, multiply, lighten, screen, overlay, hardlight, add, subtract, difference, invert, alpha, and erase.

## Example

The following example illustrates getting and setting the blendMode property:

```javascript
//if the blend mode is "add", change it to "subtract"
var blend = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].blendMode;
fl.trace(blend);
if (blend == "add") {
    fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].blendMode = "subtract";
}
```
