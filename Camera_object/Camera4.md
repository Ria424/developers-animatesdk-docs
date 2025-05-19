# Camera.getTint()

## Availability

Adobe Animate 2019.

## Usage

Camera.getTint(frameIndex)

## Parameters

**frameIndex** `integer`;

## Returns

`{percent: number; red: number; green: number; blue: number}`; Tint object. e.g. {percent: 0, red: 0, green: 0, blue: 0}

## Description

Return object with two properties: 'percent' & 'color'.

## Example

```javascript
var timeline = an.getDocumentDOM().getTimeline();
timeline.camera.cameraEnabled = true;
timeline.camera.tintEnabled = true;

var tintVal = timeline.camera.getTint(0);
fl.trace(
    "Tint Percentage: " + tintVal.percent
    + " Red: " + tintVal.red
    + " Green: " + tintVal.green
    + " Blue: " + tintVal.blue
);
```

## See also

- [Camera.getRotation()](../Camera_object/Camera2.md)
- [Camera.getZoom()](../Camera_object/Camera1.md)
