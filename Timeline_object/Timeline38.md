# Timeline.removeFrames()

## Availability

Flash MX 2004.

## Usage

Timeline.removeFrames(\[startFrameIndex \[,endFrameIndex\]\])

## Parameters

**startFrameIndex** `integer?`; A zero-based index that specifies the first frame at which to start removing frames. If you omit *startFrameIndex*, the method uses the current selection; if there is no selection, all frames at the current playhead on all layers are removed. This parameter is optional.

**endFrameIndex** `integer?`; A zero-based index that specifies the frame at which to stop removing frames; the range of frames goes up to, but does not include, *endFrameIndex*. If you specify only *startFrameIndex*, *endFrameIndex* defaults to the *startFrameIndex* value. This parameter is optional.

## Returns

Nothing.

## Description

Method; Deletes the frame.

## Example

The following example deletes Frame 5 up to, but not including, Frame 10 of the top layer in the current scene (remember that index values are different from frame number values):

```javascript
fl.getDocumentDOM().getTimeline().currentLayer = 0;
fl.getDocumentDOM().getTimeline().removeFrames(4, 9);
```

The following example deletes Frame 8 on the top layer in the current scene:

```javascript
fl.getDocumentDOM().getTimeline().currentLayer = 0;
fl.getDocumentDOM().getTimeline().removeFrames(7);
```
