# Timeline.getBounds()

## Availability

Adobe Animate.

## Usage

Timeline.getBounds(\[frame \[, includeHiddenLayers\]\])

## Parameters

**frame** `integer`; The number of the frame for which you want the bounds. Defaults to 1, which is the first frame. This parameter is optional.

**includeHiddenLayers** `boolean?`; Indicates whether to include element bounds from hidden layers. Defaults to the SWF publish setting value for "include hidden layers". This parameter is optional.

## Returns

The bounding rectangle for all elements on all layers on the Timeline, for the specified frame.

## Description

Method; Returns the bounding rectangle for all elements on all layers on the Timeline, for a given frame.

## Example

The following example illustrates the use of this method:

```javascript
var doc = fl.getDocumentDOM();
var tl = doc.getTimeline();
for (var f = 1; f <= 20; f++) {
    var rect = tl.getBounds(f, true);
    if (rect != 0) {
        var width = rect.right - rect.left;
        var height = rect.bottom - rect.top;
        fl.trace("" + rect.left + "," + rect.top + "," + width + "," + height);
    }
}
```
