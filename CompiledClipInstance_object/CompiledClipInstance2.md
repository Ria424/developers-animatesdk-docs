# CompiledClipInstance.backgroundColor

## Availability

Adobe Animate.

## Usage

CompiledClipInstance.backgroundColor

## Description

Property; `string`; Specifies the matte color when Opaque is selected. This is a string in hexadecimal #rrggbb format or an integer containg the value.

## Example

The following example illustrates getting the backgroundColor property:

```javascript
var bitmapInstance = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
bitmapInstance.backgroundColor = "#000000";
```
