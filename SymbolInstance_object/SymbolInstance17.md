## SymbolInstance.description

#### Availability

Flash MX 2004.

#### Usage

SymbolInstance.description

#### Description

Property; `string`; A string that is equivalent to the Description field in the Accessibility panel. The description is read by the screen reader. This property is not available for graphic symbols.

#### Example

The following example stores the value for the Accessibility panel description of the object in the theDescription variable:

```javascript
var theDescription = fl.getDocumentDOM().selection[0].description;
```

The following example sets the value for the Accessibility panel description to Click the home button to go to home:

```javascript
fl.getDocumentDOM().selection[0].description = "Click the home button to go to home";
```
