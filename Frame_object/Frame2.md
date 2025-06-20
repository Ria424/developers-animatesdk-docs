# Frame.convertToFrameByFrameAnimation()

## Availability

Adobe Animate.

## Usage

Frame.convertToFrameByFrameAnimation()

## Returns

Returns true if the frame contains animation that can be converted to frame by frame animation. For example: return *true* for Motion Tween frame or Classic Tween frame; return *false* for other type of frame such as static.

### Type

```typescript
boolean
```

## Description

Method; Converts the current frame to Frame-by-Frame Animation.

## Example

The following example converts the frame 0 to Frame-by-Frame Animation:

```javascript
var result = fl.getDocumentDOM().getTimeline().layers[0].frames[0].convertToFrameByFrameAnimation(); 
fl.trace(result);
```
