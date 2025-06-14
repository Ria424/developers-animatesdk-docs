# Frame.is3DMotionObject()

## Availability

Flash Professional CS5.

## Usage

Frame.is3DMotionObject()

## Returns

whether the current selection is a 3D motion object.

### Type

```typescript
boolean
```

## Description

Method; A boolean value. Lets you know whether the current selection is a 3D motion object.

## Example

The following example returns a trace statement informing you that the current selection is or is not a 3D motion object.

```javascript
var doc = fl.getDocumentDOM();
var my_tl = doc.getTimeline();
getCurrentFrame = function() {
    var layer = my_tl.layers[my_tl.currentLayer];
    var frame = layer.frames[my_tl.currentFrame];
    return frame;
}
var theFrame = getCurrentFrame();
if (theFrame.isMotionObject() && theFrame.is3DMotionObject()) {
    fl.trace("This selection is 3D Motion");
} else {
    fl.trace("This selection is not 3D motion");
}
```
