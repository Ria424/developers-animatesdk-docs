## Camera.getRotation()

#### Availability

Adobe Animate 2019.

#### Usage

camera.getRotation(frameIndex)

#### Parameters

**frameIndex** `integer`;

#### Return

`integer`;

#### Description

Return current angle of camera.

#### Example

```javascript
var timeline = an.getDocumentDOM().getTimeline();
timeline.camera.cameraEnabled = true;
var val = timeline.camera.getRotation(0);
```

#### See also

[GetZDepth()](../Camera_object/Camera.md), [GetRotation()](../Camera_object/Camera2.md), [GetZoom()](../Camera_object/Camera1.md)
