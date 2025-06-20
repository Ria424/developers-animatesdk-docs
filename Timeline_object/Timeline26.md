# Timeline.getSelectedLayers()

## Availability

Flash MX 2004.

## Parameters

None.

## Returns

An array of the zero-based index values of the selected layers.

### Type

```typescript
integer
```

## Description

Method; Gets the zero-based index values of the currently selected layers.

## Example

The following example displays 1,0 in the Output panel:

```javascript
fl.getDocumentDOM().getTimeline().setSelectedLayers(0);
fl.getDocumentDOM().getTimeline().setSelectedLayers(1, false);
var layerArray = fl.getDocumentDOM().getTimeline().getSelectedLayers();
fl.trace(layerArray);
```

## See also

[Timeline.setSelectedLayers()](../Timeline_object/Timeline47.md)
