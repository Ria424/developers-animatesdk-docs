## Frame.selectMotionPath()

#### Availability

Flash Professional CS5.

#### Usage

*Frame.selectMotionPath()*

#### Description

Method; a Boolean value. Selects *(true)* or deselects *(false)* the motion path of the current motion object.

#### Example

The example selects or deselects the motion path of the current motion object.

```javascript
var doc = fl.getDocumentDOM();
var my_tl = doc.getTimeline();
getCurrentFrame = function() {
    var layer = my_tl.layers[my_tl.currentLayer];
    var frame = layer.frames[my_tl.currentFrame];
    return frame;
}
var theFrame = getCurrentFrame();
if (theFrame.isMotionObject()){
    if (theFrame.hasMotionPath()) {
        theFrame.selectMotionPath(true);
    } else {
        fl.trace("There is no motion path");
    }
} else {
    fl.trace("It is no motion");
}
```
