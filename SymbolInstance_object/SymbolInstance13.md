# SymbolInstance.colorGreenPercent

## Availability

Flash MX 2004.

## Description

Property; `integer`; Part of the color transformation for the instance. This property is equivalent to using the Color >Advanced setting in the instance Property inspector (the percentage controls on the left of the dialog box). This value sets the green values by a specified percentage. Allowable values are from -100 to 100.

## Example

The following example sets the colorGreenPercent of the selected symbol instance to 70:

```javascript
fl.getDocumentDOM().selection[0].colorGreenPercent = 70;
```
