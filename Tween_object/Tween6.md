## Tween.tweenType

#### Availability

Flash Pro CC

#### Usage

Tween.tweenType

#### Description

`"motion" | "shape"`; Specifies the type of tween. For example, Motion or Shape.

#### Example

```javascript
var tweenObj = fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenObj;
fl.trace(tweenObj.tweenType);
```
