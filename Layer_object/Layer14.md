# Layer.getColorTransformAtFrame()

## Availability

Animate 2020.

## Usage

layer.getColorTransformAtFrame(frameIndex)  

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

Absolute zero-based frame index.

## Returns

ColorTransform object.

If there's no ColorTransform in frame, this default object will be returned.

```typescript
{
    mode: "Advanced";
    colorAlphaAmount: 0;
    colorAlphaPercent: 100;
    colorRedAmount: 0;
    colorRedPercent: 100;
    colorGreenAmount: 0;
    colorGreenPercent: 100;
    colorBlueAmount: 0;
    colorBluePercent: 100;
}
```

### Type

```typescript
FrameAdvancedColorTransform | FrameBrightnessColorTransform | FrameTintColorTransform | FrameAlphaColorTransform
```

## Description

Returns ColorTransform object.

Based on the mode, the paramters will be updated here. For example, if tint is present, the value corresponding to tint only will be present along with the color matrix values.

## Example

The following example gets the color transform at the fifth frame of first layer:

```javascript
var cxform = an.getDocumentDOM().getTimeline().layers[0].getColorTransformAtFrame(4);
```

## See also

- [Layer.setColorTransformAtFrame()](../Layer_object/Layer17.md)
