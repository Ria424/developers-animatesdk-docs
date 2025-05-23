# Timeline.deleteLayer()

## Availability

Flash MX 2004.

## Usage

Timeline.deleteLayer([index])

## Parameters

**index** `integer?`; A zero-based index that specifies the layer to be deleted. If there is only one layer in the timeline, this method has no effect. This parameter is optional.

## Returns

Nothing.

## Description

Method; Deletes a layer. If the layer is a folder, all layers within the folder are deleted. If you do not specify the layer index, Animate deletes the currently selected layers.

## Example

The following example deletes the second layer from the top:

```javascript
fl.getDocumentDOM().getTimeline().deleteLayer(1);
```

The following example deletes the currently selected layers:

```javascript
fl.getDocumentDOM().getTimeline().deleteLayer();
```
