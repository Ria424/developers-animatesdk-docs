## Tween.getGeometricTransform()

#### Availability

Flash Pro CC.

#### Usage

Tween.getGeometricTransform(frameIndex)

#### Parameters

**frameIndex** `integer`; Offset index of the frame from which geometric transformations have to be retrieved.

#### Returns

`Matrix`; Matrix object that represents geometric transformations at the frame offset.

#### Description

Method; Returns Matrix object that represents geometric transformation of a tween within a user-defined range (from offset to a selected frame).

#### Example

```javascript
var doc = fl.getDocumentDOM();
var timeline = doc.getTimeline();
var frame = timeline.layers[0].frames[0];
var tweenObj = frame.tweenObj;

fl.outputPanel.clear();
fl.trace("Tween duration = " + tweenObj.duration);
for (var i = 0; i < tweenObj.duration; i++) {
    var matrix = tweenObj.getGeometricTransform(i);
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
}
```
