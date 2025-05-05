# Timeline.reorderLayer()

## Availability

Flash MX 2004.

## Usage

Timeline.reorderLayer(layerToMove, layerToPutItBy \[, bAddBefore\])

## Parameters

**layerToMove** `integer`; A zero-based index that specifies which layer to move.

**layerToPutItBy** `integer`; A zero-based index that specifies which layer you want to move the layer next to. For example, if you specify 1 for *layerToMove* and 0 for *layerToPutItBy*, the second layer is placed next to the first layer.

**bAddBefore** `boolean?`; Specifies whether to move the layer before or after *layerToPutItBy*. If you specify false, the layer is moved after *layerToPutItBy*. The default value is true. This parameter is optional.

## Returns

Nothing.

## Description

Method; Moves the first specified layer before or after the second specified layer.

## Example

The following example moves the layer at index 2 to the top (on top of the layer at index 0):

```javascript
fl.getDocumentDOM().getTimeline().reorderLayer(2, 0);
```

The following example places the layer at index 3 after the layer at index 5:

```javascript
fl.getDocumentDOM().getTimeline().reorderLayer(3, 5, false);
```
