## Camera.getZoom()

#### Availability

Adobe Animate 2019.

#### Usage

*camera.getZoom(frameIndex)*

#### Parameters

frameIndex:int

#### Return

double

#### Description

Return the current zoom value of camera. Default is 100%.

#### Example

```javascript
var timeline = an.getDocumentDOM().getTimeline();
timeline.camera.cameraEnabled = true;
var zoomval = timeline.camera.getZoom(0);
```

#### See also

[GetZDepth()](../Camera_object/Camera.md), [GetRotation()](../Camera_object/Camera2.md)
