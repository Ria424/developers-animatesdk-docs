## Tween object Summary

#### Availability

Flash Pro CC.

#### Description

The Tween object can be used to access interpolated properties of tweens. Accessing properties for a non-tween frame throws errors.

#### Method Summary

You can use the following methods with the Tween object class:

| **Method** | **Description** |
| --- | --- |
| ["Tween.getColorTransform()"](../Tween_Object/Tween.md) | Returns color transformation data between frames. |
| ["Tween.getFilters()"](../Tween_Object/Tween1.md) | Returns filters data of a selected frame from a tween span. |
| ["Tween.getGeometricTransform()"](../Tween_Object/Tween2.md) | Returns Matrix object that represents geometric transformation of a tween within a user-defined range (from offset to a selected frame). |
| ["Tween.getShape()"](../Tween_Object/Tween3.md) | Returns interpolated shape of a selected frame within a tween-span. |

#### Properties Summary

You can use the following properties within methods of Tween object class:

| **Property** | **Description** |
| --- | --- |
| ["Tween.duration"](../Tween_Object/Tween4.md) | Duration of a tween span that is equal to number of frames in a tween. |
| ["Tween.startFrame"](../Tween_Object/Tween5.md) | Start frame of a tween. |
| ["Tween.tweenType"](../Tween_Object/Tween6.md) | Specifies the type of tween. For example, Motion or Shape. |

#### Usage

```javascript
var mat;
var frame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
var tweenObj = frame.tweenObj;
var frame1 = fl.getDocumentDOM().getTimeline().layers[1].frames[0];
fl.trace("Tween duration = " + tweenObj.duration);
for (var i = 1; i < tweenObj.duration; i++) {
   mat = tweenObj.getGeometricTransform(i);

var colors = tweenObj.getColorTransform(i);
fl.trace("Frame " + i + " Matrix = a = " + mat.a + " b = " + mat.b + " c = " + mat.c + " d =" + mat.d + " tx = " + mat.tx + " ty = " + mat.ty );
fl.trace("color transform :");
fl.trace("alpha : amount = " + colors.colorAlphaAmount + " percent = " + colors.colorAlphaPercent);
fl.trace("red : amount = " + colors.colorRedAmount + " percent = " + colors.colorRedPercent);
fl.trace("green : amount = " + colors.colorGreenAmount + " percent = " + colors.colorGreenPercent);
fl.trace("blue : amount = " + colors.colorBlueAmount+" percent = " + colors.colorBluePercent); }
```
