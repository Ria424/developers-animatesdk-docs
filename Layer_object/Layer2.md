## Layer.frameCount

#### Availability

Flash MX 2004.

#### Usage

Layer.frameCount

#### Description

Read-only property; `integer`; Specifies the number of frames in the layer.

#### Example

The following example stores the number of frames in the first layer in the fcNum variable:

```javascript
var fcNum = fl.getDocumentDOM().getTimeline().layers[0].frameCount;
```
