# Timeline.pasteFrames()

## Availability

Flash MX 2004.

## Usage

Timeline.pasteFrames(\[startFrameIndex \[, endFrameIndex\]\])

## Parameters

### **startFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index indicating where to start pasting frames. If omitted, the current selection is used. Optional.

### **endFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index indicating the frame where pasting stops (not included). If omitted, pasting ends at the **`startFrameIndex`**. Optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Pastes the range of frames from the clipboard into the specified frames.

## Example

The following example pastes the frames on the clipboard to the currently selected frame or playhead location:

```javascript
fl.getDocumentDOM().getTimeline().pasteFrames();
```

The following example pastes the frames on the clipboard at Frame 2 up to, but not including, Frame 10 (remember that index values are different from frame number values):

```javascript
fl.getDocumentDOM().getTimeline().pasteFrames(1, 9);
```

The following example pastes the frames on the clipboard starting at Frame 5:

```javascript
fl.getDocumentDOM().getTimeline().pasteFrames(4);
```
