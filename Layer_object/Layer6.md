# Layer.locked

## Availability

Flash MX 2004.

## Description

Property; `boolean`; Specifies the locked status of the layer. If set to true, the layer is locked. The default value is false.

## Example

The following example stores the Boolean value for the status of the first layer in the lockStatus variable:

```javascript
var lockStatus = fl.getDocumentDOM().getTimeline().layers[0].locked;
```

The following example sets the status of the first layer to unlocked:

```javascript
fl.getDocumentDOM().getTimeline().layers[0].locked = false;
```
