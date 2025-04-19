## Frame.hasCustomEase

#### Availability

Flash 8.

#### Usage

frame.hasCustomEase

#### Description

Property; `boolean`; If true, the frame gets its ease information from the custom ease curve. If false, the frame gets its ease information from the ease value.

#### Example

The following example specifies that the first frame in the top layer should get its ease information from the ease value rather than the custom ease curve:

```javascript
var theFrame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
theFrame.hasCustomEase = false;
```

#### See also

- [Frame.getCustomEase()](../Frame_object/Frame6.md)
- [Frame.setCustomEase()](../Frame_object/Frame24.md)
- [Frame.useSingleEaseCurve](../Frame_object/Frame40.md)
