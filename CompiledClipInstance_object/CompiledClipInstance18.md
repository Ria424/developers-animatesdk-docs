# CompiledClipInstance.shortcut

## Availability

Flash MX 2004.

## Description

Property; `string`; A string that is equivalent to the Shortcut field in the Accessibility panel. The shortcut is read by the screen reader. This property is not available for dynamic text fields.

## Example

The following example illustrates getting and setting the shortcut property:

```javascript
// Get the shortcut key of the object.
var theShortcut = fl.getDocumentDOM().selection[0].shortcut;
// Set the shortcut key of the object.
fl.getDocumentDOM().selection[0].shortcut = "Ctrl+I";
```
