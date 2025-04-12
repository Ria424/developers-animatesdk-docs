## Frame.convertMotionObjectTo3D()

#### Availability

Flash Professional CS5.

#### Usage

*frame.convertMotionObjectTo3D()*

#### Description

Method; Converts the selected motion object to a 3D motion object.

#### Example

The following example converts the selected motion object to a 3D motion object:

```javascript
var doc = fl.getDocumentDOM();
var my_tl = doc.getTimeline();
getCurrentFrame = function() {
    var layer = my_tl.layers[my_tl.currentLayer];
    var frame = layer.frames[my_tl.currentFrame];
    return frame;
}
var theFrame = getCurrentFrame();
if (theFrame.isMotionObject() && !theFrame.is3DMotionObject()) {
    theFrame.convertMotionObjectTo3D();
} else {
    fl.trace("It isn't motion or it's already a 3D motion");
}
```
