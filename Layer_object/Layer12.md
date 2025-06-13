# Layer.setZDepthAtFrame()

## Availability

Animate 2019.

## Usage

Layer.setZDepthAtFrame(frameIndex, zDepth)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

Integer that specifies the frame index starting from 0.

### **zDepth**

#### Type

```typescript
number
```

#### Description

Integer that specifies the Z depth value ranges between -5000 to 10000.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Sets the Z depth at the specified frame number.

## Example

The following example sets the zdepth value at first frame to 100 of the first layer:

```javascript
fl.getDocumentDOM().getTimeline().layers[0].setZDepthAtFrame(0, 100);
```
