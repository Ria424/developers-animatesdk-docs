# Camera.resetRotation()

## Availability

Adobe Animate 2019.

## Usage

Camera.resetRotation(frameIndex)

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

Reset camera angle to zero.

## Example

The following example resets camera angle to zero.

```javascript
var timeline = an.getDocumentDOM().getTimeline();
timeline.camera.resetRotation(0);
```
