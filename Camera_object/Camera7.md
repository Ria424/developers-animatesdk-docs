# Camera.setZoom()

## Availability

Adobe Animate 2019

## Usage

Camera.setZoom(frameIndex, zoomVal)

## Parameters

**frameIndex** `integer`;

**zoomVal** `integer`;

## Returns

Nothing.

## Description

Zooms camera to absolute value given by input parameter in percentage.

## Example

The following example zooms camera to absolute value given by input parameter in percentage.

```javascript
var timeline = an.getDocumentDOM().getTimeline();
timeline.camera.setZoom(37, -100);
```
