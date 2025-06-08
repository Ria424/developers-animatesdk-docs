# Timeline.cutLayers()

## Availability

Flash CS5.5 Professional.

## Usage

Timeline.cutLayers([startLayerIndex [, endLayerIndex]])

## Parameters

### **startLayerIndex**

#### Type

```typescript
number?
```

#### Description

Optional. A zero-based integer index that specifies the first layer to cut. If omitted, the method uses the currently selected layers.

### **endLayerIndex**

#### Type

```typescript
number?
```

#### Description

Optional. A zero-based integer index specifying the last layer to cut, inclusive. If omitted, only the **`startLayerIndex`** layer is cut.

## Returns

Nothing.

## Description

Method; Cuts the layers that are currently selected in the Timeline, or the layers in the specified range. Optional arguments can be provided in order to specify a layer or range of layers to cut.

## Example

The following example cuts the layers from index 2 to index 7 in the Timeline:

```javascript
fl.getDocumentDOM().getTimeline().cutLayers(2, 7);
```

## See also

- [Timeline.copyLayers()](../Timeline_object/Timeline7.md)
- [Timeline.pasteLayers()](../Timeline_object/Timeline35.md)
- [Timeline.duplicateLayers()](../Timeline_object/Timeline17.md)
