# Layer.setColorTransformAtFrame()

## Availability

Animate 2020.

## Usage

Layer.setColorTransformAtFrame(frameIndex, colorTransform)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

Absolute zero-based frame index.

### **colorTransform**

#### Type

```typescript
{
    mode?: "Advanced" | "Brightness" | "Tint" | "Alpha";
    colorAlphaAmount?: number;
    colorAlphaPercent?: number;
    colorRedAmount?: number;
    colorRedPercent?: number;
    colorGreenAmount?: number;
    colorGreenPercent?: number;
    colorBlueAmount?: number;
    colorBluePercent?: number;
    brightnessPercent?: number;
    tintPercent?: number;
    tintRed?: number;
    tintGreen?: number;
    tintBlue?: number;
    alphaPercent?: number;
}
```

#### Description

The cxform to be set.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Sets the color transform at the frame.

## Example

The following example copies the color transform of the first frame and sets it to the tenth frame:

```javascript
var layer = an.getDocumentDOM().getTimeline().layers[0]
var cxform = layer.getColorTransformAtFrame(0);
layer.setColorTransformAtFrame(9, cxform);
```

## See also

- [Layer.getColorTransformAtFrame()](../Layer_object/Layer14.md)
