# Timeline.cutFrames()

## Availability

Flash MX 2004.

## Usage

timeline.cutFrames([startFrameIndex [, endFrameIndex]])

## Parameters

### **startFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index that specifies the first frame to cut. If omitted, the current selection is used. This parameter is optional.

### **endFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based index indicating the frame where cutting stops (not included in the cut). If omitted, only the frame at **`startFrameIndex`** is cut. Optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; cuts a range of frames on the current layer from the timeline and saves them to the clipboard.

## Example

The following example cuts the selected frames from the timeline and saves them to the clipboard:

```javascript
fl.getDocumentDOM().getTimeline().cutFrames();
```

The following example cuts Frame 2 up to, but not including, Frame 10 from the timeline and saves them to the clipboard (remember that index values are different from frame number values):

```javascript
fl.getDocumentDOM().getTimeline().cutFrames(1, 9);
```

The following example cuts Frame 5 from the timeline and saves it to the clipboard:

```javascript
fl.getDocumentDOM().getTimeline().cutFrames(4);
```
