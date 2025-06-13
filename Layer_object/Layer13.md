# Layer.getBlendModeAtFrame()

## Availability

Animate 2020.

## Usage

layer.getBlendModeAtFrame(frameIndex)  

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

Absolute zero-based frame index.

## Returns

A string value that specifies the blending mode applied at the particular frame.

### Type

```typescript
BlendMode
```

## Description

Method; A string value that specifies the blending mode applied at the particular frame.

## Example

The following example displays the name of the blending mode applied at the first frame of the first layer in the Output panel:

```javascript
an.trace(an.getDocumentDOM().getTimeline().layers[0].getBlendModeAtFrame(0));
```

## See also

- [Layer.setBlendModeAtFrame()](../Layer_object/Layer16.md)
