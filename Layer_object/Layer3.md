## Layer.frames

#### Availability

Flash MX 2004.

#### Usage

layer.frames

#### Description

Read-only property; `Frame[]`; An array of [Frame object](../Frame_object/Frame_summary.md)s.

#### Example

The following example sets the variable frameArray to the array of Frame objects for the frames in the current document:

```javascript
var frameArray = fl.getDocumentDOM().getTimeline().layers[0].frames;
```

To determine if a frame is a keyframe, check whether the [Frame.startFrame](../Frame_object/Frame36.md) property
matches the array index, as shown in the following example:

```javascript
var frameArray = fl.getDocumentDOM().getTimeline().layers[0].frames;
var n = frameArray.length;
for (var i = 0; i < n; i++) {
    if (i == frameArray[i].startFrame) {
        alert("Keyframe at: " + i);
    }
}
```
