# Timeline.insertKeyframe()

## Availability

Flash MX 2004.

## Usage

Timeline.insertKeyframe(\[frameNumIndex\])

## Parameters

### **frameNumIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer specifying the frame index in the current layer where the keyframe will be inserted. If omitted, the current playhead or selected frame is used. This parameter is optional.

## Returns

Nothing.

## Description

Method; Inserts a keyframe at the specified frame. If you omit the parameter, the method inserts a keyframe using the playhead or selection location.
This method works the same as [Timeline.insertBlankKeyframe()](../Timeline_object/Timeline27.md) except that the inserted keyframe contains the contents of the frame it converted (that is, it’s not blank).

## Example

The following example inserts a keyframe at the playhead or selected location:

```javascript
fl.getDocumentDOM().getTimeline().insertKeyframe();
```

The following example inserts a keyframe at Frame 10 of the second layer (remember that index values are different from frame or layer number values):

```javascript
fl.getDocumentDOM().getTimeline().currentLayer = 1; fl.getDocumentDOM().getTimeline().insertKeyframe(9);
```
