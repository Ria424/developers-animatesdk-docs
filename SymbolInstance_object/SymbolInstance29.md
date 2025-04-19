## SymbolInstance.useBackgroundColor

#### Availability

Flash CS5.5 Professional.

#### Usage

SymbolInstance.useBackgroundColor

#### Description

Property; `boolean`; Indicates whether to use 24 bit mode (true) or 32 bit mode with alpha (false) for the instance. If true, the backgroundColor specified for the instance is used.

#### Example

The following example sets the useBackgroundColor property of an instance to true:

```javascript
fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].useBackgroundColor = true;
```
