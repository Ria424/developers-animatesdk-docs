# Document.translate3DSelection()

## Availability

Flash CS4 Professional.

## Usage

Document.translate3DSelection(xyzCoordinate, bGlobalTransform)

## Parameters

### **xyzCoordinate**

#### Type

```typescript
Point3D
```

#### Description

An XYZ coordinate that specifies the axes for 3D translation.

### **bGlobalTransform**

#### Type

```typescript
boolean
```

#### Description

Specifies whether the transformation mode should be global (true) or local (false).

## Returns

Nothing.

## Description

Method: Applies a 3D translation to the selection. This method is available only for movie clips.

## Example

In the following example, the selection is first translated relative to the stage (globally) and then relative to itself (locally).

```javascript
var myDocument = fl.getDocumentDOM();
myDocument.translate3DSelection({x: 52.0, y: 0, z: 0}, true);
myDocument.translate3DSelection({x: 52.0, y: 0, z: -55.2}, false);
```

## See also

[Document.translate3DCenter()](../Document_object/Document6042.md)
