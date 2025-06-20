# Timeline.pasteLayers()

## Availability

Flash CS5.5 Professional.

## Usage

Timeline.pasteLayers(\[layerIndex\])

## Parameters

### **layerIndex**

#### Type

```typescript
number?
```

#### Description

Optional. A zero-based integer specifying the layer above which the clipboard layers are pasted. If omitted, the current selection is used.

## Returns

Integer indicating the lowest layer index of the layers that were pasted.

### Type

```typescript
number
```

## Description

Method; Paste layers that have been previously cut or copied above the currently selected layer, or above the specified layer index. If the specified layer is a folder layer, the layers are pasted into the folder. Returns the lowest layer index of the layers that were pasted. This action does not affect the system clipboard.

## Example

The following example pastes the layers from the layer clipboard above the currently selected layer in the Timeline:

```javascript
fl.getDocumentDOM().getTimeline().pasteLayers();
```

The following example pastes the layers from the layer clipboard above layer index 2:

```javascript
fl.getDocumentDOM().getTimeline().pasteLayers(2);

```

## See also

- [Timeline.cutLayers()](../Timeline_object/Timeline15.md)
- [Timeline.copyLayers()](../Timeline_object/Timeline7.md)
- [Timeline.duplicateLayers()](../Timeline_object/Timeline17.md)
