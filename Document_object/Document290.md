# Document.renameScene()

## Availability

Flash MX 2004.

## Usage

Document.renameScene(name)

## Parameters

### **name**

#### Type

```typescript
string
```

#### Description

The new name of the scene.

## Returns

`boolean`; true if the name is changed successfully; false otherwise. If the new name is not unique, for example, the method returns false.

## Description

Method; Renames the currently selected scene in the Scenes panel. The new name for the selected scene must be unique.

## Example

The following example renames the current scene to "new name":

```javascript
var success = fl.getDocumentDOM().renameScene("new name");
```
