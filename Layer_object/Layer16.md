# Layer.setBlendModeAtFrame()

## Availability

Animate 2020.

## Usage

Layer.setBlendModeAtFrame(frameIndex, blendMode)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

Absolute zero-based frame index.

### **blendMode**

#### Type

```typescript
BlendMode
```

#### Description

The blending mode to apply. This value is case-insensitive.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Sets the blending mode at the particular frame.

## Example

The following example sets the blending mode of the frame number 5.

```javascript
an.getDocumentDOM().getTimeline().layers[0].setBlendModeAtFrame(4, "Subtract");
```

## See also

- [Layer.getBlendModeAtFrame()](../Layer_object/Layer13.md)
