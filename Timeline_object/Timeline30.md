# Timeline.layerCount

## Availability

Flash MX 2004.

## Description

Read-only property; `integer`; The number of layers in the specified timeline.

## Example

The following example uses the NumLayer variable to store the number of layers in the current scene:

```javascript
var NumLayer = fl.getDocumentDOM().getTimeline().layerCount;
```
