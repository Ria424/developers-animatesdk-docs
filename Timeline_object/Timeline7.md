## Timeline.copyLayers()

#### Availability

Flash CS5.5 Professional.

#### Usage

timeline.copyLayers([startLayerIndex [, endLayerIndex]])

#### Parameters

**startLayerIndex** `integer?`; Optional. A zero-based index that specifies the beginning of the range of layers to copy. If you omit
startLayerIndex, the method uses the current selection.

**endLayerIndex** `integer?`; Optional. A zero-based index that specifies the layer at which to stop copying. The range of layers to copy goes up to and including endLayerIndex. If you specify only startLayerIndex, then endLayerIndex defaults to the value of startLayerIndex.

#### Returns

Nothing.

#### Description

Method; Copies the layers that are currently selected in the Timeline, or the layers in the specified range. Optional arguments can be provided in order to specify a layer or range of layers to copy.

#### Example

The following example copies the layers from index 2 to index 7 in the Timeline:

```javascript
fl.getDocumentDOM().getTimeline().copyLayers(2, 7);
```

#### See also

- [Timeline.cutLayers()](../Timeline_object/Timeline15.md)
- [Timeline.pasteLayers()](../Timeline_object/Timeline35.md)
- [Timeline.duplicateLayers()](../Timeline_object/Timeline17.md)
