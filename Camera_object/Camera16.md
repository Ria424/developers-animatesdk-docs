# Camera.reset()

## Availability

Adobe Animate 2019.

## Usage

Camera.reset(frameIndex)

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

## Description

Reset all camera properties to default.

## Example

The following example reset all camera properties to default.

```javascript
var timeline = an.getDocumentDOM().getTimeline();
timeline.camera.reset(0);
```
