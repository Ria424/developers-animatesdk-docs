# Tween summary

## Availability

Flash Pro CC.

## Description

The Tween object can be used to access interpolated properties of tweens. Accessing properties for a non-tween frame throws errors.

## Method Summary

You can use the following methods with the Tween object class:

| **Method** | **Description** |
| --- | --- |
| [Tween.getColorTransform()](../Tween_object/Tween.md) | Returns color transformation data between frames. |
| [Tween.getFilters()](../Tween_object/Tween1.md) | Returns filters data of a selected frame from a tween span. |
| [Tween.getGeometricTransform()](../Tween_object/Tween2.md) | Returns Matrix object that represents geometric transformation of a tween within a user-defined range (from offset to a selected frame). |
| [Tween.getShape()](../Tween_object/Tween3.md) | Returns interpolated shape of a selected frame within a tween-span. |

## Properties Summary

You can use the following properties within methods of Tween object class:

| **Property** | **Description** |
| --- | --- |
| [Tween.duration](../Tween_object/Tween4.md) | Duration of a tween span that is equal to number of frames in a tween. |
| [Tween.startFrame](../Tween_object/Tween5.md) | Start frame of a tween. |
| [Tween.tweenType](../Tween_object/Tween6.md) | Specifies the type of tween. For example, Motion or Shape. |

## Usage

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
        "\nMatrix: a = " + matrix.a
        + ", b = " + matrix.b
        + ", c = " + matrix.c
        + ", d =" + matrix.d
        + ", tx = " + matrix.tx
        + ", ty = " + matrix.ty
    );
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
