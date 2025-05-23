# Tween.getShape()

## Availability

Flash Pro CC.

## Usage

Tween.getShape(frameIndex)

## Parameters

**frameIndex** `integer`; Offset index of the frame from which shape data has to be retrieved.

## Returns

`{x: number; y: number; width: number; height: number;}`; Returns shape coordinates at the frame offset.

## Description

Method; Returns interpolated shape of a selected frame within a tween-span.

## Example

```javascript
var tweenObj = fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenObj;
if (tweenObj.tweenType == "shape") {
    for (var i = 0; i < tweenObj.duration; i++) {
        var shape = tweenObj.getShape(i);
        fl.trace(
            "X: " + shape.x +
            " Y: " + shape.x +
            " Width: " + shape.width +
            " Height: " + shape.height
        );
    }
}
```
