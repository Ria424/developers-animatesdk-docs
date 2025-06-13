# Layer.getZDepthAtFrame()

## Availability

Animate 2019.

## Usage

Layer.getZDepthAtFrame(frameIndex)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

Absolute zero-based frame index.

## Returns

Integer value that specifies the Z depth value of the frame.

### Type

```typescript
number
```

## Description

Method; Gets the Z depth at the specified frame number.

## Example

The following example gets the zdepth value at first frame of the first layer:

```javascript
fl.getDocumentDOM().getTimeline().layers[0].getZDepthAtFrame(0)
```
