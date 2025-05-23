# Timeline.getFrameProperty()

## Availability

Flash MX 2004.

## Usage

Timeline.getFrameProperty(property \[, startframeIndex \[, endFrameIndex\]\])

## Parameters

**property** `string`; The name of the property for which to get the value. See the Property summary for the [Frame object](../Frame_object/Frame_summary.md) for a complete list of properties.

**startFrameIndex** `integer?`; A zero-based index that specifies the starting frame number for which to get the value. If you omit
*startFrameIndex*, the method uses the current selection. This parameter is optional.

**endFrameIndex** `integer?`; A zero-based index that specifies the end of the range of frames to select. The range goes up to, but does not include, *endFrameIndex*. If you specify only *startFrameIndex*, *endFrameIndex* defaults to the value of *startFrameIndex*. This parameter is optional.

## Returns

`any | undefined`; A value for the specified property, or undefined if all the selected frames do not have the same property value.

## Description

Method; retrieves the specified property’s value for the selected frames.

## Example

The following example retrieves the name of the first frame in the current document’s top layer and displays the name in the Output panel:

```javascript
fl.getDocumentDOM().getTimeline().currentLayer = 0;
fl.getDocumentDOM().getTimeline().setSelectedFrames(0, 0, true);
var frameName = fl.getDocumentDOM().getTimeline().getFrameProperty("name");
fl.trace(frameName);
```
