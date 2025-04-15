## Camera.getZDepth()

#### Availability

Adobe Animate 2019.

#### Usage

camera.getZDepth(frameIndex)

#### Parameters

**frameIndex** `integer`;

#### Return

`integer`;

#### Description

Return current Z Depth value of camera.

#### Example

```javascript
var timeline = an.getDocumentDOM().getTimeline();
timeline.camera.cameraEnabled = true;
var depth = timeline.camera.getZDepth(0);
```

#### See also

[GetRotation()](../Camera_object/Camera2.md)
