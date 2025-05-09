# Layer.outline

## Availability

Flash MX 2004.

## Description

Property; `boolean`; Specifies the status of outlines for all objects in the layer. If set to true, all objects in the layer appear only with outlines. If false, objects appear as they were created.

## Example

The following example makes all objects on the first layer appear only with outlines:

```javascript
fl.getDocumentDOM().getTimeline().layers[0].outline = true;
```
