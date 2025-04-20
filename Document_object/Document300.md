## Document.reorderScene()

#### Availability

Flash MX 2004.

#### Usage

Document.reorderScene(sceneToMove, sceneToPutItBefore)

#### Parameters

**sceneToMove** `integer`; Specifies which scene to move, with 0 (zero) being the first scene.

**sceneToPutItBefore** `integer`; Specifies the scene before which you want to move the scene specified by *sceneToMove*. Specify 0 (zero) for the first scene. For example, if you specify 1 for *sceneToMove* and 0 for *sceneToPutItBefore*, the second scene is placed before the first scene. Specify -1 to move the scene to the end.

#### Returns

Nothing.

#### Description

Method; Moves the specified scene before another specified scene.

#### Example

The following example moves the second scene to before the first scene:

```javascript
fl.getDocumentDOM().reorderScene(1, 0);
```
