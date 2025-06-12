# Camera.getZoom()

## Availability

Adobe Animate 2019.

## Usage

getZoom(frameIndex)

## Parameters

### **frameIndex**

#### Type

```typescript
number
```

#### Description

integer

## Returns

### Type

```typescript
double
```

## Description

Return the current zoom value of camera. Default is 100%.

## Example

```javascript
var timeline = an.getDocumentDOM().getTimeline();
timeline.camera.cameraEnabled = true;
var zoomval = timeline.camera.getZoom(0);
```

## See also

- [Camera.getZDepth()](../Camera_object/Camera.md)
- [Camera.getRotation()](../Camera_object/Camera2.md)
