# Timeline.currentFrame

## Availability

Flash MX 2004.

## Description

Property; `integer`; The zero-based index for the frame at the current playhead location.

## Example

The following example sets the playhead of the current timeline to Frame 10 (remember that index values are different from frame number values):

```javascript
fl.getDocumentDOM().getTimeline().currentFrame = 9;
```

The following example stores the value of the current playhead location in the curFrame variable:

```javascript
var curFrame = fl.getDocumentDOM().getTimeline().currentFrame;
```
