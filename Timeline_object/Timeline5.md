# Timeline.convertToKeyframes()

## Availability

Flash MX 2004.

## Usage

Timeline.convertToKeyframes([startFrameIndex [, endFrameIndex]])

## Parameters

### **startFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index specifying the first frame to convert to keyframes. If omitted, the method converts the currently selected frames. Optional.

### **endFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index specifying the frame where conversion to keyframes stops (exclusive). If omitted, only the frame at **`startFrameIndex`** is converted. Optional.

## Returns

Nothing.

### Type

```typescript
void
```

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
