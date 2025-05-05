# Stroke summary

## Availability

Flash MX 2004.

## Description

The Stroke object contains all the settings for a stroke, including the custom settings. This object represents the information contained in the Property inspector. Using the Stroke object together with the [Document.setCustomStroke()](../Document_object/Document480.md) method, you can change the stroke settings for the Tools panel, the Property inspector, and the current selection.

You can also get the stroke settings of the Tools panel and Property inspector, or of the current selection, by using the [Document.getCustomStroke()](../Document_object/Document75.md) method.

This object always has the following four properties: style, thickness, color, and breakAtCorners. (In Flash CS3, the breakAtCorners property was deprecated in favor of [Stroke.joinType](../Stroke_object/Stroke11.md).) Other properties can be set, depending on the value of the [Stroke.style](../Stroke_object/Stroke20.md) property.

## Property summary

The following properties are available for the Stroke object:

| **Property** | **Description** |
| --- | --- |
| [Stroke.breakAtCorners](../Stroke_object/Stroke.md) | A Boolean value, same as the Sharp Corners setting in the custom Stroke Style dialog box. |
| [Stroke.capType](../Stroke_object/Stroke1.md) | A string that specifies the type of cap for the stroke. |
| [Stroke.color](../Stroke_object/Stroke2.md) | A string, hexadecimal value, or integer that represents the stroke color. |
| [Stroke.curve](../Stroke_object/Stroke3.md) | A string that specifies the type of hatching for the stroke. |
| [Stroke.dash1](../Stroke_object/Stroke4.md) | An integer that specifies the lengths of the solid part of a dashed line. |
| [Stroke.dash2](../Stroke_object/Stroke5.md) | An integer that specifies the lengths of the blank part of a dashed line. |
| [Stroke.density](../Stroke_object/Stroke6.md) | A string that specifies the density of a stippled line. |
| [Stroke.dotSize](../Stroke_object/Stroke7.md) | A string that specifies the dot size of a stippled line. |
| [Stroke.dotSpace](../Stroke_object/Stroke8.md) | An integer that specifies the spacing between dots in a dotted line. |
| [Stroke.hatchThickness](../Stroke_object/Stroke9.md) | A string that specifies the thickness of a hatch line. |
| [Stroke.jiggle](../Stroke_object/Stroke10.md) | A string that specifies the jiggle property of a hatched line. |
| [Stroke.joinType](../Stroke_object/Stroke11.md) | A string that specifies the type of join for the stroke. |
| [Stroke.length](../Stroke_object/Stroke12.md) | A string that specifies the length of a hatch line. |
| [Stroke.miterLimit](../Stroke_object/Stroke13.md) | A float value that specifies the angle above which the tip of the miter will be truncated by a segment. |
| [Stroke.pattern](../Stroke_object/Stroke14.md) | A string that specifies the pattern of a ragged line. |
| [Stroke.rotate](../Stroke_object/Stroke15.md) | A string that specifies the rotation of a hatch line. |
| [Stroke.scaleType](../Stroke_object/Stroke16.md) | A string that specifies the type of scale to be applied to the stroke. |
| [Stroke.shapeFill](../Stroke_object/Stroke17.md) | A [Fill object](../Fill_object/Fill_summary.md) that represents the fill settings of the stroke. |
| [Stroke.space](../Stroke_object/Stroke18.md) | A string that specifies the spacing of a hatched line. |
| [Stroke.strokeHinting](../Stroke_object/Stroke19.md) | A Boolean value that specifies whether stroke hinting is set on the stroke. |
| [Stroke.style](../Stroke_object/Stroke20.md) | A string that describes the stroke style. |
| [Stroke.thickness](../Stroke_object/Stroke21.md) | An integer that specifies the stroke size. |
| [Stroke.variation](../Stroke_object/Stroke22.md) | A string that specifies the variation of a stippled line. |
| [Stroke.waveHeight](../Stroke_object/Stroke23.md) | A string that specifies the wave height of a ragged line. |
| [Stroke.waveLength](../Stroke_object/Stroke24.md) | A string that specifies the wave length of a ragged line. |
