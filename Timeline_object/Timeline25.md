# Timeline.getSelectedFrames()

## Availability

Flash MX 2004.

## Parameters

None.

## Returns

An array containing 3 × *n* integers, where *n* is the number of selected regions. The first integer in each group is the layer index, the second integer is the start frame of the beginning of the selection, and the third integer specifies the ending frame of that selection range. The ending frame is not included in the selection.

### Type

```typescript
number[]
```

## Description

Method; Retrieves the currently selected frames in an array.

## Example

With the top layer being the current layer, the following example displays 0, 5, 10, 0, 20, 25 in the Output panel:

```javascript
var timeline = fl.getDocumentDOM().getTimeline();
timeline.setSelectedFrames(5, 10);
timeline.setSelectedFrames(20, 25, false);
var theSelectedFrames = timeline.getSelectedFrames();
fl.trace(theSelectedFrames);
```

## See also

[Timeline.setSelectedFrames()](../Timeline_object/Timeline46.md)
