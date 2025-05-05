# Document.setStageVanishingPoint()

## Availability

Flash CS4 Professional.

## Usage

Document.setStageVanishingPoint(point)

## Parameters

**point** `Point`; A point that specifies the *x* and *y* coordinates of the location at which to set the vanishing point for viewing 3D objects.

## Returns

Nothing.

## Description

Specifies the vanishing point for viewing 3D objects.

## Example

The following example sets the Stage vanishing point:

```javascript
fl.getDocumentDOM().setStageVanishingPoint({x: 45, y: 45});
```
