# CompiledClipInstance.description

## Availability

Flash MX 2004.

## Description

Property; `string`; A string that is equivalent to the Description field in the Accessibility panel. The description is read by the screen reader.

## Example

The following example illustrates getting and setting the description property:

```javascript
// Get the description of the current selection.
var theDescription = fl.getDocumentDOM().selection[0].description;
// Set the description of the current selection.
fl.getDocumentDOM().selection[0].description = "This is compiled clip number 1";
```
