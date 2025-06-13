# Timeline.copyMotion()

## Availability

Flash CS3 Professional.

## Usage

Timeline.copyMotion()

## Parameters

None.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Copies motion on selected frames, either from a motion tween or from frame-by-frame animation. You can then use [Timeline.pasteMotion()](../Timeline_object/Timeline36.md) to apply the motion to other frames.
To copy motion as text (code) that you can paste into a script, see [Timeline.copyMotionAsAS3()](../Timeline_object/Timeline9.md).

## Example

The following example copies the motion from the selected frame or frames:

```javascript
fl.getDocumentDOM().getTimeline().copyMotion();
```

## See also

- [Timeline.copyMotionAsAS3()](../Timeline_object/Timeline9.md)
- [Timeline.pasteMotion()](../Timeline_object/Timeline36.md)
