# Frame.getCustomEase()

## Availability

Flash 8.

## Usage

Frame.getCustomEase([property])

## Parameters

**property** `"all" | "position" | "rotation" | "scale" | "color" | "filters"?"all"`; An optional string that specifies the property for which you want to return the custom ease value. Acceptable values are *"all", "position", "rotation", "scale", "color", and "filters"*. The default value is *"all"*.

## Returns

`Point[]`; Returns an array of JavaScript objects, each of which has an *x* and *y* property.

## Description

Method; Returns an array of objects that represent the control points for the cubic Bézier curve that defines the ease curve.

## Example

The following example returns the custom ease value of the position property for the first frame in the top layer:

```javascript
var theFrame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
var easeArray = theFrame.getCustomEase("position");
```

## See also

- [Frame.hasCustomEase](../Frame_object/Frame10.md)
- [Frame.setCustomEase()](../Frame_object/Frame24.md)
- [Frame.useSingleEaseCurve](../Frame_object/Frame40.md)
