# Document.setBlendMode()

## Availability

Flash 8.

## Usage

document.setBlendMode(mode)

## Parameters

**mode** `"normal" | "layer" | "multiply" | "screen" | "overlay" | "hardlight" | "lighten" | "darken" | "difference" | "add" | "subtract" | "invert" | "alpha" | "erase"`; The desired blending mode for the selected objects. Acceptable values are "normal", "layer", "multiply", "screen", "overlay", "hardlight", "lighten", "darken", "difference", "add", "subtract", "invert", "alpha", and "erase".

## Returns

Nothing.

## Description

Method; Sets the blending mode for the selected objects.

## Example

The following example sets the blending mode for the selected object to "add".

```javascript
fl.getDocumentDOM().setBlendMode("add");
```

## See also

- [Document.addFilter()](../Document_object/Document3.md)
- [Document.setFilterProperty()](../Document_object/Document520.md)
- [SymbolInstance.blendMode](../SymbolInstance_object/SymbolInstance4.md)
