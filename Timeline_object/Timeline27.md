# Timeline.insertBlankKeyframe()

## Availability

Flash MX 2004.

## Usage

Timeline.insertBlankKeyframe(\[frameNumIndex\])

## Parameters

### **frameNumIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer indicating the frame index where the blank keyframe will be inserted. If omitted, the current playhead frame is used. This parameter is optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Inserts a blank keyframe at the specified frame index; if the index is not specified, the method inserts the blank keyframe by using the playhead/selection. See also [Timeline.insertKeyframe()](../Timeline_object/Timeline29.md).

## Example

The following example inserts a blank keyframe at Frame 20 (remember that index values are different from frame
number values):

```javascript
fl.getDocumentDOM().getTimeline().insertBlankKeyframe(19);
```

The following example inserts a blank keyframe at the currently selected frame (or playhead location if no frame is selected):

```javascript
fl.getDocumentDOM().getTimeline().insertBlankKeyframe();
```
