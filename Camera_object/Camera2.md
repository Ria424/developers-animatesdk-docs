# Camera.getRotation()

## Availability

Adobe Animate 2019.

## Usage

getRotation(frameIndex)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

integer

## Returns

`integer`;

## Description

Return current angle of camera.

## Example

```javascript
var timeline = an.getDocumentDOM().getTimeline();
timeline.camera.cameraEnabled = true;
var val = timeline.camera.getRotation(0);
```

## See also

- [Camera.getZDepth()](../Camera_object/Camera.md)
- [Camera.getRotation()](../Camera_object/Camera2.md)
- [Camera.getZoom()](../Camera_object/Camera1.md)
