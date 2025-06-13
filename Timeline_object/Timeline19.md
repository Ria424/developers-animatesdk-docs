# Timeline.findLayerIndex()

## Availability

Flash MX 2004.

## Usage

Timeline.findLayerIndex(name)

## Parameters

### **name**

#### Type

```typescript
string
```

#### Description

The name of the layer to find.

## Returns

An array of index values for the specified layer. If the specified layer is not found, Animate returns undefined.

### Type

```typescript
integer[] | undefined
```

## Description

Method; Finds an array of indexes for the layers with the given name. The layer index is flat, so folders are considered part of the main index.

## Example

The following example shows the index values of all layers named Layer 7 in the Output panel:

```javascript
var layerIndex = fl.getDocumentDOM().getTimeline().findLayerIndex("Layer 7");
fl.trace(layerIndex);
```

The following example illustrates how to pass the values returned from this method back to
[Timeline.setSelectedLayers()](../Timeline_object/Timeline47.md):

```javascript
var layerIndex = fl.getDocumentDOM().getTimeline().findLayerIndex("Layer 1");
fl.getDocumentDOM().getTimeline().setSelectedLayers(layerIndexAnimate[0], true);
```
