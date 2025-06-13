# Timeline.duplicateLayers()

## Availability

Flash CS5.5 Professional.

## Usage

Timeline.duplicateLayers(\[startLayerIndex \[, endLayerIndex\]\])

## Parameters

### **startLayerIndex**

#### Type

```typescript
number?
```

#### Description

Optional. A zero-based index indicating the first layer to duplicate. If omitted, the currently selected layers are duplicated.

### **endLayerIndex**

#### Type

```typescript
number?
```

#### Description

Optional. A zero-based integer indicating the last layer to duplicate. The duplication includes all layers from **`startLayerIndex`** to **`endLayerIndex`**, inclusive. If omitted, only the layer at **`startLayerIndex`** is duplicated.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Duplicates the layers that are currently selected in the Timeline, or the layers in the specified range. Optional arguments can be provided in order to specify a layer or range of layers to duplicate.

## Example

The following example duplicates the layer currently selected in the Timeline:

```javascript
fl.getDocumentDOM().getTimeline().duplicateLayers();
```

The following example duplicates the layers from index 2 to index 7 above layer index 2:

```javascript
fl.getDocumentDOM().getTimeline().duplicatedLayers(2, 7);
```

## See also

- [Timeline.copyLayers()](../Timeline_object/Timeline7.md)
- [Timeline.cutLayers()](../Timeline_object/Timeline15.md)
- [Timeline.pasteLayers()](../Timeline_object/Timeline35.md)
