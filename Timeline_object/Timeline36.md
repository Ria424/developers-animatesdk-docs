# Timeline.pasteMotion()

## Availability

Flash CS3 Professional.

## Usage

Timeline.pasteMotion()

## Parameters

None.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Pastes the range of motion frames retrieved by [Timeline.copyMotion()](../Timeline_object/Timeline8.md) to the Timeline. If necessary, existing frames are displaced (moved to the right) to make room for the frames being pasted.

## Example

The following example pastes the motion on the clipboard to the currently selected frame or playhead location, displacing that frame to the right of the pasted frames:

```javascript
fl.getDocumentDOM().getTimeline().pasteMotion();
```

## See also

[Timeline.copyMotion()](../Timeline_object/Timeline8.md)
