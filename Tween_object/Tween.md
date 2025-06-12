# Tween.getColorTransform()

## Availability

Flash Pro CC.

## Usage

Tween.getGeometricTransform(frameIndex)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

Offset (integer) index of interpolated frame.

## Returns

ColorTransform object:

```typescript
declare type ColorTransform = {
    colorAlphaAmount: number;
    colorAlphaPercent: number;
    colorRedAmount: number;
    colorRedPercent: number;
    colorGreenAmount: number;
    colorGreenPercent: number;
    colorBlueAmount: number;
    colorBluePercent: number;
}
```

### Type

```typescript
ColorTransform
```

## Description

Method; Gets color transformation data between frames.

## Example

```javascript
var doc = fl.getDocumentDOM();
var timeline = doc.getTimeline();
var frame = timeline.layers[0].frames[0];
var tweenObj = frame.tweenObj;

fl.outputPanel.clear();
fl.trace("Tween duration = " + tweenObj.duration);
for (var i = 0; i < tweenObj.duration; i++) {
    var colors = tweenObj.getColorTransform(i);
    fl.trace("\nFrame " + i + ":")
    fl.trace(
        "\nColor transform:\nalpha: amount = " + colors.colorAlphaAmount
        + " percent = " + colors.colorAlphaPercent
        + "\nred: amount = " + colors.colorRedAmount
        + " percent = " + colors.colorRedPercent
        + "\ngreen: amount = " + colors.colorGreenAmount
        + " percent = " + colors.colorGreenPercent
        + "\nblue: amount = " + colors.colorBlueAmount
        + " percent = " + colors.colorBluePercent
    );
}
```
