# Timeline.convertToKeyframes()

## Availability

Flash MX 2004.

## Usage

Timeline.convertToKeyframes([startFrameIndex [, endFrameIndex]])

## Parameters

**startFrameIndex** `integer?`; A zero-based index that specifies the first frame to convert to keyframes. If you omit
*startFrameIndex*, the method converts the currently selected frames. This parameter is optional.

**endFrameIndex** `integer?`; A zero-based index that specifies the frame at which conversion to keyframes will stop. The range of frames to convert goes up to, but does not include, *endFrameIndex*. If you specify only *startFrameIndex*, *endFrameIndex* defaults to the value of *startFrameIndex*. This parameter is optional.

## Returns

Nothing.

## Description

Method; Converts a range of frames to keyframes (or converts the selection if no frames are specified) on the current layer.

## Example

The following example converts the selected frames to keyframes:

```javascript
fl.getDocumentDOM().getTimeline().convertToKeyframes();
```

The following example converts to keyframes the frames from Frame 2 up to, but not including, Frame 10 (remember that index values are different from frame number values):

```javascript
fl.getDocumentDOM().getTimeline().convertToKeyframes(1, 9);
```

The following example converts Frame 5 to a keyframe:

```javascript
fl.getDocumentDOM().getTimeline().convertToKeyframes(4);
```
