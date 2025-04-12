## Tween.getColorTransform()

#### Availability

Flash Pro CC.

#### Usage

Tween.getGeometricTransform(frameIndex)

#### Parameters

**frameIndex** Offset index of interpolated frame.

#### Returns

Value object {"colorAlphaAmount", "colorAlphaPercent", "colorRedAmount", "colorRedPercent", "colorGreenAmount", "colorGreenPercent", "colorBlueAmount", "colorBluePercent"}.

#### Description

Method; Gets color transformation data between frames.

#### Example

```javascript
var mat, colors;
var frame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
var tweenObj = frame.tweenObj;
fl.trace("Tween duration = " + tweenObj.duration);
for (var i = 0; i < tweenObj.duration; i++) {
    mat = tweenObj.getGeometricTransform(i);
    colors = tweenObj.getColorTransform(i);
    fl.trace(
        "Frame " + i + " Matrix = a = " + mat.a
        + " b = " + mat.b
        + " c = " + mat.c
        + " d = " + mat.d
        + " tx = " + mat.tx
        + " ty = " + mat.ty
    );
    fl.trace(
        "Color transform = alpha = " + colors.colorAlphaAmount
        + " = red = " + colors.colorRedAmount
        + " = green = " + colors.colorGreenAmount
        + " = blue = " + colors.colorBlueAmount
    );
}
```
