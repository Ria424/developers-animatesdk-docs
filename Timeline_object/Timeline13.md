# Timeline.currentLayer

## Availability

Flash MX 2004.

## Description

Property; `integer`; The zero-based index for the currently active layer. A value of 0 specifies the top layer, a value of 1 specifies the layer below it, and so on.

## Example

The following example makes the top layer active:

```javascript
fl.getDocumentDOM().getTimeline().currentLayer = 0;
```

The following example stores the index of the currently active layer in the curLayer variable:

```javascript
var curLayer = fl.getDocumentDOM().getTimeline().currentLayer;
```
