# Timeline.copyMotionAsAS3()

## Availability

Flash CS3 Professional.

## Usage

Timeline.copyMotionAsAS3()

## Parameters

None.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Copies motion on selected frames, either from a motion tween or from frame-by-frame animation, to the clipboard as ActionScript 3.0 code. You can then paste this code into a script.
To copy motion in a format that you can apply to other frames, see [Timeline.copyMotion()](../Timeline_object/Timeline8.md).

## Example

The following example copies the motion from the selected frame or frames to the clipboard as ActionScript 3.0 code:

```javascript
fl.getDocumentDOM().getTimeline().copyMotionAsAS3();
```

## See also

[Timeline.copyMotion()](../Timeline_object/Timeline8.md)
