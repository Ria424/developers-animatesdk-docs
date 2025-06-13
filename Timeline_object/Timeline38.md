# Timeline.removeFrames()

## Availability

Flash MX 2004.

## Usage

Timeline.removeFrames(\[startFrameIndex \[,endFrameIndex\]\])

## Parameters

### **startFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index indicating the first frame to remove. If omitted, the method uses the current selection; if there is no selection, it removes all frames at the current playhead position on all layers. Optional.

### **endFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index indicating the frame where removal stops (not inclusive). If omitted, only the frame at **`startFrameIndex`** is removed. Optional.

## Returns

Nothing.

### Type

```typescript
void
```

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
