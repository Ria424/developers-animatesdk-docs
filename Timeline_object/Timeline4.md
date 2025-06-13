# Timeline.convertToBlankKeyframes()

## Availability

Flash MX 2004.

## Usage

Timeline.convertToBlankKeyframes([startFrameIndex [, endFrameIndex]])

## Parameters

### **startFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index specifying the starting frame to convert to blank keyframes. If omitted, the method uses the currently selected frames. This parameter is optional.

### **endFrameIndex**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index specifying the frame where the conversion stops (not inclusive). If omitted, only the frame at **`startFrameIndex`** is converted. Optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Converts frames to blank keyframes on the current layer.

## Example

The following example converts Frame 2 up to, but not including, Frame 10 to blank keyframes (remember that index values are different from frame number values):

```javascript
fl.getDocumentDOM().getTimeline().convertToBlankKeyframes(1, 9);
```

The following example converts Frame 5 to a blank keyframe:

```javascript
fl.getDocumentDOM().getTimeline().convertToBlankKeyframes(4);
```
