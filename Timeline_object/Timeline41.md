# Timeline.reverseFrames()

## Availability

Flash MX 2004.

## Usage

Timeline.reverseFrames(\[startFrameIndex \[, endFrameIndex\]\])

## Parameters

### **startFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index that specifies the first frame to start reversing. If omitted, the current selection is used. Optional.

### **endFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index specifying the frame at which to stop reversing. The range includes frames from **`startFrameIndex`** up to, but not including, **`endFrameIndex`**. If omitted, it defaults to **`startFrameIndex`**. Optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Reverses a range of frames.

## Example

The following example reverses the positions of the currently selected frames:

```javascript
fl.getDocumentDOM().getTimeline().reverseFrames();
```

The following example reverses frames from Frame 10 up to, but not including, Frame 15 (remember that index values are different from frame number values):

```javascript
fl.getDocumentDOM().getTimeline().reverseFrames(9, 14);
```
