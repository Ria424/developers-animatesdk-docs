# CompiledClipInstance.tabIndex

## Availability

Flash MX 2004.

## Description

Property; `integer`; An integer that is equivalent to the Tab Index field in the Accessibility panel. Creates a tab order in which objects are accessed when the user presses the Tab key.

## Example

The following example illustrates getting and setting the tabIndex property:

```javascript
// Get the tabIndex of the object.
var theTabIndex = fl.getDocumentDOM().selection[0].tabIndex;
// Set the tabIndex of the object.
fl.getDocumentDOM().selection[0].tabIndex = 1;
```
