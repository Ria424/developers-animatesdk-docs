# Camera.resetPosition()

## Availability

Adobe Animate 2019.

## Usage

Camera.resetPosition(frameIndex)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

integer

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Reset camera position to the original position i.e (0, 0, 0).

## Example

The following example resets camera position to the original position i.e (0, 0, 0):

```javascript
var timeline = an.getDocumentDOM().getTimeline();
timeline.camera.resetPosition(0);
```
