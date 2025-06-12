# Frame.getMotionObjectXML()

## Availability

Flash Professional CS5.

## Usage

Frame.getMotionObjectXML()

## Returns

Motion XML from the selected motion object.

### Type

```typescript
string
```

## Example

The following example returns the motion XML from the selected motion object.

```javascript
var doc = fl.getDocumentDOM();
var my_tl = doc.getTimeline();
getCurrentFrame = function() {
    var layer = my_tl.layers[my _tl.currentLayer];
    var frame = layer.frames[my_tl.currentFrame];
    return frame;
}
var theFrame = getCurrentFrame();
if (theFrame.isMotionObject()) {
    fl.trace(theFrame.getMotionObjectXML());
} else {
    fl.trace("It is not motion.");
}
```
