# Layer.visible

## Availability

Flash MX 2004.

## Description

Property; `boolean`; Specifies whether the layer’s objects on the Stage are shown or hidden. If set to true, all objects in the layer are visible; if false, they are hidden. The default value is true.

## Example

The following example makes all objects in the first layer invisible:

```javascript
fl.getDocumentDOM().getTimeline().layers[0].visible = false;
```
