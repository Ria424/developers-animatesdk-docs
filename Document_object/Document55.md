## Document.duplicateScene()

#### Availability

Flash MX 2004.

#### Usage

Document.duplicateScene()

#### Parameters

None.

#### Returns

`boolean`; true if the scene is duplicated successfully; false otherwise.

#### Description

Method; Makes a copy of the currently selected scene, giving the new scene a unique name and making it the current scene.

#### Example

The following example duplicates the second scene in the current document:

```javascript
fl.getDocumentDOM().editScene(1); // Set the middle scene to current scene.
var success = fl.getDocumentDOM().duplicateScene();
```
