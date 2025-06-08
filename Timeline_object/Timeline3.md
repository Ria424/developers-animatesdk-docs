# Timeline.clearKeyframes()

## Availability

Flash MX 2004.

## Usage

Timeline.clearKeyframes([startFrameIndex [, endFrameIndex]])

## Parameters

### **startFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index that specifies where to start clearing keyframes. If omitted, the current selection is used. Optional.

### **endFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index marking the end of the range of frames to clear (not inclusive). If omitted, only the frame at **`startFrameIndex`** is cleared. Optional.

## Returns

Nothing.

## Description

Method; Converts a keyframe to a regular frame and deletes its contents on the current layer.

## Example

The following example clears the keyframes from Frame 5 up to, but not including, Frame 10 (remember that index values are different from frame number values):

```javascript
fl.getDocumentDOM().getTimeline().clearKeyframes(4, 9);
```

The following example clears the keyframe at Frame 15 and converts it to a regular frame:

```javascript
fl.getDocumentDOM().getTimeline().clearKeyframes(14);
```
