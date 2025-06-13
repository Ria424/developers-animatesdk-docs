# Timeline.copyLayers()

## Availability

Flash CS5.5 Professional.

## Usage

timeline.copyLayers([startLayerIndex [, endLayerIndex]])

## Parameters

### **startLayerIndex**

#### Type

```typescript
number?
```

#### Description

Optional. A zero-based integer index that specifies the first layer to copy. If omitted, the method copies the currently selected layers.

### **endLayerIndex**

#### Type

```typescript
number?
```

#### Description

Optional. A zero-based integer index indicating the last layer to copy, inclusive. If omitted, only the layer at **`startLayerIndex`** is copied.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Copies the layers that are currently selected in the Timeline, or the layers in the specified range. Optional arguments can be provided in order to specify a layer or range of layers to copy.

## Example

The following example copies the layers from index 2 to index 7 in the Timeline:

```javascript
fl.getDocumentDOM().getTimeline().copyLayers(2, 7);
```

## See also

- [Timeline.cutLayers()](../Timeline_object/Timeline15.md)
- [Timeline.pasteLayers()](../Timeline_object/Timeline35.md)
- [Timeline.duplicateLayers()](../Timeline_object/Timeline17.md)
