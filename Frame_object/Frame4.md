## Frame.duration

#### Availability

Flash MX 2004.

#### Usage

frame.duration

#### Description

Read-only property; `integer`; An integer that represents the number of frames in a frame sequence.

#### Example

The following example stores the number of frames in a frame sequence that starts at the first frame in the top layer in the frameSpan variable:

```javascript
var frameSpan = fl.getDocumentDOM().getTimeline().layers[0].frames[0].duration;
```
