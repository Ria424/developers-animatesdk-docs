## Document.distributeToKeyframes()

#### Availability

Adobe Animate.

#### Usage

Document.distributeToKeyframes()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; Performs a distribute-to-keyframes operation on the current selection—equivalent to selecting Distribute to KeyFrames. A new keyframe is created for every object. New keyframes are created on the active layer immediately after the active frame

#### Example

The following example distributes the current selection to keyframes:

```javascript
if (fl.getDocumentDOM().canDistributeToKeyframes())
    fl.getDocumentDOM().distributeToKeyframes();
```
