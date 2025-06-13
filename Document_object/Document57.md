# Document.editScene()

## Availability

Flash MX 2004.

## Usage

Document.editScene(index)

## Parameters

### **index**

#### Type

```typescript
number
```

#### Description

A zero-based integer that specifies which scene to edit.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Makes the specified scene the currently selected scene for editing.

## Example

Assuming that there are three scenes (Scene0, Scene1, and Scene2) in the current document, the following example makes Scene2 the current scene and then deletes it:

```javascript
fl.getDocumentDOM().editScene(2);
fl.getDocumentDOM().deleteScene();
```
