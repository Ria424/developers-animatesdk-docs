# Timeline.deleteLayer()

## Availability

Flash MX 2004.

## Usage

Timeline.deleteLayer([index])

## Parameters

### **index**

#### Type

```typescript
number?
```

#### Description

Optional. A zero-based integer specifying which layer to delete. If omitted, the currently selected layers are deleted. If only one layer exists, the method does nothing.

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
