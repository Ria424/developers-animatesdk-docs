## SymbolInstance.colorRedAmount

#### Availability

Flash MX 2004.

#### Usage

SymbolInstance.colorRedAmount

#### Description

Property; `integer`; An integer that is part of the color transformation for the instance. This property is equivalent to using the Color >Advanced setting in the instance Property inspector. Allowable values are from -255 to 255.

#### Example

The following example sets the colorRedAmount of the selected symbol instance to 255:

```javascript
fl.getDocumentDOM().selection[0].colorRedAmount = 255;
```
