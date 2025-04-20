## Frame.getSoundEnvelopeLimits()

#### Availability

Adobe Animate.

#### Usage

Frame.getSoundEnvelopeLmits()

#### Parameters

None.

#### Returns

`{start: any; end: any;}`; Returns a structure that contain start and end fields.

#### Description

Method; Gets the limits (start, end) for a custom Sound envelope that is applied to the frame sound.

#### Example

The following example illustrates the use of getSoundEnvelopeLimits:

```javascript
var limits = fl.getDocumentDOM().getTimeline().layers[0].frames[0].getSoundEnvelopeLimits();
fl.trace(limits.start);
fl.trace(limits.end);
```

#### See also

[Frame.setSoundEnvelopeLimits()](../Frame_object/Frame28.md)
