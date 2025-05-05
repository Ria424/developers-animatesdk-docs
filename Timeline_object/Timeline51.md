# Timeline.mergeLayers()

## Availability

Animate 2020.

## Usage

Timeline.mergeLayers(startLayerNum:int, endLayerNum:int).

## Parameters

**startLayerNum** `integer`; It is an integer that specifies the starting layer index.

**endLayerNum** `integer`; It is an integer that specifies the ending layer index.

## Returns

Layer Object of the merged layer.

## Description

Method; Merge the layers within specified range of indexes.

## Example

The following example merge layers from index 0 to 3.

```javascript
fl.getDocumentDOM().getTimeline().mergeLayers(0, 3);
```
