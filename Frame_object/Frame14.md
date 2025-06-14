# Frame.isMotionObject()

## Availability

Flash Professional CS5.

## Usage

Frame.isMotionObject()

## Returns

whether the current selection is a motion object.

### Type

```typescript
boolean
```

## Description

Method; Lets you know whether the current selection is a motion object.

## Example

The following example returns a trace statement informing you that the current selection is or is not a motion object.

```javascript
var my_tl = doc.getTimeline();
getCurrentFrame = function() {
    var layer = my_tl.layers[my_tl.currentLayer];
    var frame = layer.frames[my_tl.currentFrame];
    return frame;
}
var theFrame = getCurrentFrame();
if (theFrame.isMotionObject()) {
    fl.trace("This selection is motion.");
} else {
    fl.trace("This selection is not motion.");
}
```
