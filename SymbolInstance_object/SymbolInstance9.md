# SymbolInstance.colorAlphaPercent

## Availability

Flash MX 2004.

## Description

Property; `integer`; Specifies part of the color transformation for the instance. This property is equivalent to using the Color >Advanced setting in the instance Property inspector (the percentage controls on the left of the dialog box). This value changes the tint and alpha values to a specified percentage. Allowable values are from -100 to 100. See also [SymbolInstance.colorAlphaAmount](../SymbolInstance_object/SymbolInstance8.md).

## Example

The following example sets the colorAlphaPercent of the selected symbol instance to 80:

```javascript
fl.getDocumentDOM().selection[0].colorAlphaPercent = 80;
```
