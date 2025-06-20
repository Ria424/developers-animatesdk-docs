# Timeline.removeMotionObject()

## Availability

Flash Professional CS5.

## Usage

Timeline.removeMotionObject(\[startFrame \[,endFrame\])

## Parameters

### **startFrame**

#### Type

```typescript
number?
```

#### Description

Specifies the first frame to start removing motion objects. If omitted, the method uses the current selection; if nothing is selected, it removes motion objects from all frames at the current playhead position on all layers. Optional.

### **endFrame**

#### Type

```typescript
number?
```

#### Description

Specifies the frame where removal stops; frames up to but not including **`endFrame`** are affected. If omitted, only **`startFrame`** is used. Optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Removes the motion object and converts the frame(s) back to static frames. The parameters are optional, and if specified set the timeline selection to the indicated frames prior to removing the motion object.

## Example

The following example deletes all motion objects and converts the frames back to static frames at the current playhead position on the top layer:

```javascript
fl.getDocumentDOM().getTimeline().currentLayer = 0;
fl.getDocumentDOM().getTimeline().removeMotionObject();
```

The following example deletes motion objects from Frame 5 up to, but not including, Frame 15 of the top layer in the current scene:

```javascript
fl.getDocumentDOM().getTimeline().currentLayer = 0;
fl.getDocumentDOM().getTimeline().removeMotionObject(5, 15);
```

## See also

[Timeline.createMotionObject()](../Timeline_object/Timeline10.md)
