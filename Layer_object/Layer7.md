# Layer.name

## Availability

Flash MX 2004.

## Description

Property; `string`; Specifies the name of the layer.

## Example

The following example sets the name of the first layer in the current document to foreground:

```javascript
fl.getDocumentDOM().getTimeline().layers[0].name = "foreground";
```
