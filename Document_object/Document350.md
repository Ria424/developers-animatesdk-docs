# Document.rotate3DSelection()

## Availability

Flash CS4 Professional.

## Usage

Document.rotate3DSelection(xyzCoordinate, bGlobalTransform)

## Parameters

**xyzCoordinate** `Point3D`; An XYZ coordinate point that specifies the axes for 3D rotation.

**bGlobalTransform** `boolean`; Specifies whether the transformation mode should be global (true) or local (false).

## Returns

Nothing.

## Description

Method; Applies a 3D rotation to the selection. This method is available only for movie clips.

## Example

In the following example, the selection is first rotated relative to the stage (globally) and then relative to itself (locally).

```javascript
var myDocument = fl.getDocumentDOM();
myDocument.rotate3DSelection({x: 52.0, y: 0, z: 0}, true); 
myDocument.rotate3DSelection({x: 52.0, y: 0, z: -55.2}, false);
```
