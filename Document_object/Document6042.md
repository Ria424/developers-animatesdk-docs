# Document.translate3DCenter()

## Availability

Flash CS4 Professional.

## Usage

Document.translate3DCenter(xyzCoordinate)

## Parameters

**xyzCoordinate** `Point3D`; An XYZ coordinate that specifies the center point for 3D rotation or translation.

## Returns

Nothing.

## Description

Method: Sets the XYZ position around which the selection is translated or rotated. This method is available only for movie clips.

## Example

The following example specifies the XYZ axes for 3D translation:

```javascript
fl.getDocumentDOM().translate3DCenter({x: 180, y: 18, z: -30});
```
