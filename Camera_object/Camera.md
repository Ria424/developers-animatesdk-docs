# Camera.getZDepth()

## Availability

Adobe Animate 2019.

## Usage

getZDepth(frameIndex)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

## Returns

`integer`;

## Description

Return current Z Depth value of camera.

## Example

```javascript
var timeline = an.getDocumentDOM().getTimeline();
timeline.camera.cameraEnabled = true;
var depth = timeline.camera.getZDepth(0);
```

## See also

[Camera.getRotation()](../Camera_object/Camera2.md)
