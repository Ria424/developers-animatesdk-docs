# Timeline.createMotionTween()

## Availability

Flash MX 2004.

## Usage

Timeline.createMotionTween([startFrameIndex [, endFrameIndex]])

## Parameters

### **startFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index indicating the starting frame for the motion tween. If omitted, the current selection is used. Optional.

### **endFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index indicating the frame where the motion tween ends (exclusive). If omitted, it defaults to the value of **`startFrameIndex`**. Optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Sets the [Frame.tweenType](../Frame_object/Frame39.md) property to motion for each selected keyframe on the current layer, and converts each frame’s contents to a single symbol instance if necessary. This property is the equivalent to the Create Motion Tween menu item in the Animate authoring tool.

## Example

The following example converts the shape in the first frame up to, but not including, Frame 10 to a graphic symbol instance and sets the frame.tweenType to motion (remember that index values are different from frame number values):

```javascript
fl.getDocumentDOM().getTimeline().createMotionTween(0, 9);
```
