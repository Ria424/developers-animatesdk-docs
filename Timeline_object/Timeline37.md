# Timeline.pasteMotionSpecial()

## Availability

Flash CS3 Professional.

## Usage

Timeline.pasteMotionSpecial()

## Parameters

None.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Pastes motion on selected frames. Applies only to a copied classic tween, not a motion tween. Displays a dialog box whose options let the user choose which parts of a classic tween to apply when pasting: X position, Y position, Horizontal scale, Vertical scale, Rotation and skew, Color, Filters, Blend mode.

## Example

The following example displays the dialog, then pastes the classic tween to the selected frames:

```javascript
fl.getDocumentDOM().getTimeline().pasteMotionSpecial();
```

## See also

[Timeline.pasteMotion()](../Timeline_object/Timeline36.md)
