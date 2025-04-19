## Document.deleteScene()

#### Availability

Flash MX 2004.

#### Usage

Document.deleteScene()

#### Parameters

None.

#### Returns

`boolean`; true if the scene is successfully deleted; false otherwise.

#### Description

Method; Deletes the current scene ([Timeline object](../Timeline_object/Timeline_summary.md)) and, if the deleted scene was not the last one, sets the next scene as the current Timeline object. If the deleted scene was the last one, it sets the first object as the current Timeline object. If only one Timeline object (scene) exists, it returns the value false.

#### Example

Assuming there are three scenes (Scene0, Scene1, and Scene2) in the current document, the following example makes Scene2 the current scene and then deletes it:

```javascript
fl.getDocumentDOM().editScene(2);
var success = fl.getDocumentDOM().deleteScene();
```
