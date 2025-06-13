# Timeline.clearFrames()

## Availability

Flash MX 2004.

## Usage

Timeline.clearFrames([startFrameIndex [, endFrameIndex]])

## Parameters

### **startFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index indicating where to start clearing frames. If omitted, the current selection is used. Optional.

### **endFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index indicating the end (exclusive) of the frames to clear. If omitted, only the frame at **`startFrameIndex`** is cleared. Optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Deletes all the contents from a frame or range of frames on the current layer.

## Example

The following example clears the frames from Frame 6 up to, but not including, Frame 11 (remember that index values are different from frame number values):

```javascript
fl.getDocumentDOM().getTimeline().clearFrames(5, 10);
```

The following example clears Frame 15:

```javascript
fl.getDocumentDOM().getTimeline().clearFrames(14);
```
