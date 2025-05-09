# Frame.motionTweenRotateTimes

## Availability

Flash MX 2004.

## Description

Property; `integer`; An integer that specifies the number of times the tweened element rotates between the starting keyframe and the next keyframe.

## Example

The following example rotates the element in this frame counter-clockwise three times by the time it reaches the next keyframe:

```javascript
var frame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
frame.motionTweenRotate = "counter-clockwise";
frame.motionTweenRotateTimes = 3;
```
