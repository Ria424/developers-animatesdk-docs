# Timeline.duplicateLayers()

## Availability

Flash CS5.5 Professional.

## Usage

Timeline.duplicateLayers(\[startLayerIndex \[, endLayerIndex\]\])

## Parameters

**startLayerIndex** `integer?`; Optional. A zero-based index that specifies the beginning of the range of layers to copy. It also specifies the layer above which the layers on the clipboard are pasted. If you omit startLayerIndex, the method uses the current layer selection.

**endLayerIndex** `integer?`; Optional. A zero-based index that specifies the layer at which to stop copying. The range of layers to copy goes up to and including endLayerIndex. If you specify only startLayerIndex, then endLayerIndex defaults to the value of startLayerIndex.

## Returns

Nothing.

## Description

Method; Duplicates the layers that are currently selected in the Timeline, or the layers in the specified range. Optional arguments can be provided in order to specify a layer or range of layers to duplicate.

## Example

The following example duplicates the layer currently selected in the Timeline:

```javascript
fl.getDocumentDOM().getTimeline().duplicateLayers();
```

The following example duplicates the layers from index 2 to index 7 above layer index 2:

```javascript
fl.getDocumentDOM().getTimeline().duplicatedLayers(2,7);

```

## See also

- [Timeline.copyLayers()](../Timeline_object/Timeline7.md)
- [Timeline.cutLayers()](../Timeline_object/Timeline15.md)
- [Timeline.pasteLayers()](../Timeline_object/Timeline35.md)
