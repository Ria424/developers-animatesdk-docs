# Camera summary

## Availability

Adobe Animate 2019

## Description

This javascript object allows user to access and change properties of camera at any frame in timeline.

Animators can use the following features that are integral to any motion film.

1. Panning with the subject of the frame.

2. Zooming in the object of interest for dramatic effect

3. Zooming out of a frame to remind the viewer of a larger picture

4. Modifying the focal point to shift the attention of the viewer from one subject to another

5. Rotating the camera

6. Using color tint or filters to apply color effects on a scene

## Method summary

The following methods can be used with the Camera object:

| **Method** | **Description** |
| --- | --- |
| [Camera.getZDepth()](../Camera_object/Camera.md) | Return current Z Depth value of camera. |
| [Camera.getZoom()](../Camera_object/Camera1.md) | Return the current zoom value of camera. Default is 100%. |
| [Camera.getRotation()](../Camera_object/Camera2.md) | Return current angle of camera. |
| [Camera.getPosition()](../Camera_object/Camera3.md) | Return object with x,y, and z properties that specify current location of camera. |
| [Camera.getTint()](../Camera_object/Camera4.md) | Return object with two properties: ‘percent’ & ‘color’. |
| [Camera.getColorFilter()](../Camera_object/Camera5.md) | Get camera color filter. |
| [Camera.setZDepth()](../Camera_object/Camera6.md) | Set camera's Z Depth value. |
| [Camera.setZoom()](../Camera_object/Camera7.md) | Zoom camera to absolute value given by input parameter in percentage. |
| [Camera.setRotation()](../Camera_object/Camera8.md) | Rotate camera by absolute angle given as input parameters. |
| [Camera.setTint()](../Camera_object/Camera9.md) | Set camera tint using tint color(RGB) & tint percent (percentage of tint). |
| [Camera.setColorFilter()](../Camera_object/Camera10.md) | Set camera color filter using decomposed values of (Brightness,Contrast,saturation,hue). |
| [Camera.resetZoom()](../Camera_object/Camera11.md) | Reset camera zoom to it's default zoom value i.e 100%. |
| [Camera.resetRotation()](../Camera_object/Camera12.md) | Reset camera angle to zero. |
| [Camera.resetPosition()](../Camera_object/Camera13.md) | Reset camera position to the original position i.e (0,0,0). |
| [Camera.resetTint()](../Camera_object/Camera14.md) | Remove camera tint. |
| [Camera.resetColorFilter()](../Camera_object/Camera15.md) | Remove color filter. |
| [Camera.reset()](../Camera_object/Camera16.md) | Reset all camera properties to default. |

## Property summary

The following properties can be used with the Camera object:

| **Property** | **Description** |
| --- | --- |
| [Camera.cameraEnabled](../Camera_object/Camera17.md) | Enable/Disable camera |
| [Camera.colorFilterEnabled](../Camera_object/Camera19.md) | Enable/Disable camera's color Filter |
| [Camera.tintEnabled](../Camera_object/Camera18.md) | Enable/Disable tint |
