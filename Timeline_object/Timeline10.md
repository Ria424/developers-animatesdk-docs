# Timeline.createMotionObject()

## Availability

Flash Professional CS5.

## Usage

Timeline.createMotionObject([startFrame [,endFrame])

## Parameters

### **startFrame**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index that specifies the starting frame for the motion object. If omitted, the current selection or playhead frame is used. Optional.

### **endFrame**

#### Type

```typescript
number?
```

#### Description

A zero-based integer index that specifies the frame where the motion object ends (not inclusive). If omitted, it defaults to the value of **`startFrame`**. Optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Creates a new motion object. The parameters are optional, and if specified set the timeline selection to the indicated frames prior to creating the motion object.

## Example

The following example creates a motion objects at the current playhead position on the top layer:

```javascript
fl.getDocumentDOM().getTimeline().currentLayer = 0;
fl.getDocumentDOM().getTimeline().createMotionObject();
```

The following example creates a motion object starting at Frame 5, and extending up to, but
not including, Frame 15 of the top layer in the current scene:

```javascript
fl.getDocumentDOM().getTimeline().currentLayer = 0;
fl.getDocumentDOM().getTimeline().createMotionObject(5, 15);
```
