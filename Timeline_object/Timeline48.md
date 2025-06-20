# Timeline.showLayerMasking()

## Availability

Flash MX 2004.

## Usage

Timeline.showLayerMasking(Animate[layer])

## Parameters

### **layer**

#### Type

```typescript
number
```

#### Description

A zero-based integer index of a mask or masked layer to show masking during authoring. This parameter is optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Shows the layer masking during authoring by locking the mask and masked layers. This method uses the current layer if no layer is specified. If you use this method on a layer that is not of type Mask or Masked, Animate displays an error in the Output panel.

## Example

The following example specifies that the layer masking of the first layer should show during authoring.

```javascript
fl.getDocumentDOM().getTimeline().showLayerMasking(0);
```
