# Text.accName

## Availability

Flash MX 2004.

## Description

Property; `string`; A string that is equivalent to the Name field in the Accessibility panel. Screen readers identify objects by reading the name aloud. This property cannot be used with dynamic text.

## Example

The following example retrieves the name of the object:

```javascript
var doc = fl.getDocumentDOM();
var theName = doc.selection[0].accName;
```

The following example sets the name of the currently selected object:

```javascript
fl.getDocumentDOM().selection[0].accName = "Home Button";
```
