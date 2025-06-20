# Timeline.insertFrames()

## Availability

Flash MX 2004.

## Usage

Timeline.insertFrames(\[numFrames \[, bAllLayers \[, frameNumIndex\]\]\])

## Parameters

### **numFrames**

#### Type

```typescript
number?
```

#### Description

The number of frames to insert. If omitted, the method determines the number of frames based on the current selection. Optional.

### **bAllLayers**

#### Type

```typescript
boolean?
```

#### Description

A boolean value that, if set to true, causes the method to insert the specified number of frames in the *numFrames* parameter into all layers; if set to false (the default), the method inserts frames into the current layer. This parameter is optional.

### **frameNumIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer specifying the frame index where frames will be inserted. Optional; if omitted, frames are inserted at the current frame.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Inserts the specified number of frames at the specified index. If no parameters are specified, this method works as follows:

- If one or more frames are selected, the method inserts the selected number of frames at the location of the first selected frame in the current layer. That is, if frames 6 through 10 are selected (a total of five frames), the method adds five frames at Frame 6 in the layer containing the selected frames.

- If no frames are selected, the method inserts one frame at the current frame on all layers. If parameters are specified, the method works as follows:

- If only *numFrames* is specified, inserts the specified number of frames at the current frame on the current layer.

- If *numFrames* is specified and *bAllLayers* is true, inserts the specified number of frames at the current frame on all layers.

- If all three parameters are specified, inserts the specified number of frames at the specified index (*frameIndex*); the value passed for *bAllLayers* determines if the frames are added only to the current layer or to all layers.

If the specified or selected frame is a regular frame, the frame is inserted at that frame. For example, if you have a span of 10 frames numbered 1-10 and you select Frame 5 (or pass a value of 4 for *frameIndex*), this method adds a frame at Frame 5, and the length of the frame span becomes 11 frames. If Frame 5 is selected and it is a keyframe, this method inserts a frame at Frame 6 regardless of whether the frame next to it is also a keyframe.

## Example

The following example inserts a frame (or frames, depending on the selection) at the current selection in the current layer:

```javascript
fl.getDocumentDOM().getTimeline().insertFrames();
```

The following example inserts five frames at the current frame in all layers:

```javascript
fl.getDocumentDOM().getTimeline().insertFrames(5);
```

***Note:** If you have multiple layers with frames in them, and you select a frame in one layer when using the previous command, Flash inserts the frames in the selected layer only. If you have multiple layers with no frames selected in them, Flash inserts the frames in all layers.*

The following example inserts three frames in the current layer only:

```javascript
fl.getDocumentDOM().getTimeline().insertFrames(3, false);
```

The following example inserts four frames in all layers, starting
from the first frame:

```javascript
fl.getDocumentDOM().getTimeline().insertFrames(4, true, 0);
```
