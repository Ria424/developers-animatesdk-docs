# SymbolInstance.accName

## Availability

Flash MX 2004.

## Description

Property; `string`; A string that is equivalent to the Name field in the Accessibility panel. Screen readers identify objects by reading the name aloud. This property is not available for graphic symbols.

## Example

The following example stores the value for the Accessibility panel name of the object in the theName variable:

```javascript
var theName = fl.getDocumentDOM().selection[0].accName;
```

The following example sets the value for the Accessibility panel name of the object to Home Button:

```javascript
fl.getDocumentDOM().selection[0].accName = "Home Button";
```
