# Camera.setColorFilter()

## Availability

Adobe Animate 2019.

## Usage

Camera.setColorFilter(frameIndex, brightness, contrast, saturation, hue)

## Parameters

**frameIndex** `integer`;

**brightness** `number`;

**contrast** `number`;

**saturation** `number`;

**hue** `number`;

## Returns

Nothing.

## Description

Set camera color filter using decomposed values of (brightness, contrast, saturation, hue).

## Example

The following example sets Set camera color filter using decomposed values of (brightness, contrast, saturation, hue).

```javascript
var timeline = an.getDocumentDOM().getTimeline();
timeline.camera.cameraEnabled = true;
timeline.camera.colorFilterEnabled = true;

timeline.camera.setColorFilter(0, 50, 255, 255, 100);
```
