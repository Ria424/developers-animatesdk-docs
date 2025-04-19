## Tween.duration

#### Availability

Flash Pro CC

#### Usage

Tween.duration

#### Description

`integer`; Duration of a tween span that is equal to number of frames in a tween.

#### Example

```javascript
var tweenObj = fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenObj;
fl.trace(tweenObj.duration);
```
