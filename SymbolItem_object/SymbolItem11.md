# SymbolItem.symbolType

## Availability

Flash MX 2004.

## Description

Property; `"movie clip" | "button" | "graphic"`; Specifies the type of symbol. Acceptable values are *"movie clip"*, *"button"*, and *"graphic"*.

## Example

The following example shows the current value of the symbolType property, changes it to button, and shows it again:

```javascript
alert(fl.getDocumentDOM().library.items[0].symbolType);
fl.getDocumentDOM().library.items[0].symbolType = "button";
alert(fl.getDocumentDOM().library.items[0].symbolType);
```
