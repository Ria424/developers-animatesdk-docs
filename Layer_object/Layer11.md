# Layer.getZDepthAtFrame() 

## Availability

Animate 2019.

## Usage

layer.getZDepthAtFrame(FrameNumber)

## Parameters

**FrameNumber** `integer`; An integer specifying the frame index starting from 0.

## Returns

`integer`; ZVal: An integer value that specifies the ZDepth value of the frame.

## Description

Method; An integer value that specifies the ZDepth value at the frame.

## Example

The following example gets the zdepth value at first frame of the first layer:

```javascript
fl.getDocumentDOM().getTimeline().layers[0].getZDepthAtFrame(0)
```
