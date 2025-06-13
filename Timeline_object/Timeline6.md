# Timeline.copyFrames()

## Availability

Flash MX 2004.

## Usage

Timeline.copyFrames([startFrameIndex [, endFrameIndex]])

## Parameters

### **startFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index indicating the first frame to copy. If omitted, the method copies the currently selected frames. This parameter is optional.

### **endFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index indicating the frame to stop copying at (not inclusive). If omitted, only the frame at **`startFrameIndex`** is copied. Optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Copies a range of frames on the current layer to the clipboard.

## Example

The following example copies the selected frames to the clipboard:

```javascript
fl.getDocumentDOM().getTimeline().copyFrames();
```

The following example copies Frame 2 up to, but not including, Frame 10, to the clipboard (remember that index values are different from frame number values):

```javascript
fl.getDocumentDOM().getTimeline().copyFrames(1, 9);
```

The following example copies Frame 5 to the clipboard:

```javascript
fl.getDocumentDOM().getTimeline().copyFrames(4);
```
