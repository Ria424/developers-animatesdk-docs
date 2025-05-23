# SymbolInstance.silent

## Availability

Flash MX 2004.

## Description

Property; `boolean`; A boolean value that enables or disables the accessibility of the object. This property is equivalent to the inverse logic of the Make Object Accessible setting in the Accessibility panel. For example, if silent is true, it is the same as the Make Object Accessible option being unchecked. If silent is false, it is the same as the Make Object Accessible option being checked.
This property is not available for graphic objects.

## Example

The following example checks to see if the object is accessible; a return value of false means the object is accessible:

```javascript
var isSilent = fl.getDocumentDOM().selection[0].silent;
```

The following example sets the object to be accessible:

```javascript
fl.getDocumentDOM().selection[0].silent = false;
```
