# Timeline.frameCount

## Availability

Flash MX 2004.

## Usage

Timeline.frameCount

## Description

Read-only property; `integer`; An integer that represents the number of frames in this timeline’s longest layer.

## Example

The following example uses a countNum variable to store the number of frames in the current document’s longest layer:

```javascript
var countNum = fl.getDocumentDOM().getTimeline().frameCount;
```
