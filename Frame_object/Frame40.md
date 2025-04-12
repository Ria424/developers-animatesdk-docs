## Frame.useSingleEaseCurve

#### Availability

Flash 8.

#### Usage

*frame.useSingleEaseCurve*

#### Description

Property; a Boolean value. If true, a single custom ease curve is used for easing information for all properties. If false, each property has its own ease curve.
This property is ignored if the frame doesn’t have custom easing applied.

#### Example

The following example specifies that a single custom ease curve should be used for all properties of the first frame on the first layer:

```javascript
var theFrame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
theFrame.useSingleEaseCurve = true;
```

#### See also

[Frame.getCustomEase()](../Frame_object/Frame6.md), [Frame.hasCustomEase](../Frame_object/Frame10.md), [Frame.setCustomEase()](../Frame_object/Frame24.md)
