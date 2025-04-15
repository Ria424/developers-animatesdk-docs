## Camera.getPosition()

#### Availability

Adobe Animate 2019.

#### Usage

camera.getPosition(frameIndex)

#### Parameters

**frameIndex** `integer`;

#### Return

Point object
e.g.{x:0,y:0}

#### Description

Return object with x,y, and z properties that specify current location of camera.

#### Example

```javascript
var tl = an.getDocumentDOM().getTimeline();
var cameraPos = tl.camera.getPosition(3); // get the camera position at 4th frame in timeline
an.trace("Camera position: x = " + cameraPos.x + ", y = " + cameraPos.y);
```
