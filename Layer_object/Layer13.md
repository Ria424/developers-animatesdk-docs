# Layer.getBlendModeAtFrame()

## Availability

Animate 2020.

## Usage

layer.getBlendModeAtFrame(frameIndex)  

## Parameters

**frameIndex** `integer`; Specifies absolute frame index.

## Returns

A string value that specifies the blending mode applied at the particular frame.

## Description

Method; A string value that specifies the blending mode applied at the particular frame.

## Example

The following example displays the name of the blending mode applied at the first frame of the first layer in the Output panel:

```javascript
an.trace(an.getDocumentDOM().getTimeline().layers[0].getBlendModeAtFrame(0));
```
