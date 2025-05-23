# Timeline.createMotionObject()

## Availability

Flash Professional CS5.

## Usage

Timeline.createMotionObject([startFrame [,endFrame])

## Parameters

**startFrame** `integer?`; Specifies the first frame at which to create motion objects. If you omit *startFrame*, the method uses the current selection; if there is no selection, all frames at the current playhead on all layers are removed. This parameter is optional.

**endFrame** `integer?`; Specifies the frame at which to stop creating motion objects; the range of frames goes up to, but does not include, *endFrame*. If you specify only *startFrame*, *endFrame* defaults to the *startFrame* value. This parameter is optional.

## Returns

Nothing.

## Description

Method; Creates a new motion object. The parameters are optional, and if specified set the timeline selection to the indicated frames prior to creating the motion object.

## Example

The following example creates a motion objects at the current playhead position on the top layer:

```javascript
fl.getDocumentDOM().getTimeline().currentLayer = 0; fl.getDocumentDOM().getTimeline().createMotionObject();
```

The following example creates a motion object starting at Frame 5, and extending up to, but
not including, Frame 15 of the top layer in the current scene:

```javascript
fl.getDocumentDOM().getTimeline().currentLayer = 0;
fl.getDocumentDOM().getTimeline().createMotionObject(5, 15);
```
