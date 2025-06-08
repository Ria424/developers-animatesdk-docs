# BitmapInstance.hPixels

## Availability

Flash MX 2004.

## Type

```typescript
number
```

## Description

Read-only property; An integer that represents the width of the bitmap—that is, the number of pixels in the horizontal dimension.

## Example

The following code retrieves the width of the bitmap in pixels:

```javascript
// Get the number of pixels in the horizontal dimension.
var bmObj = fl.getDocumentDOM().selection[0];
var isBitmap = bmObj.instanceType;
if (isBitmap == "bitmap") {
    var numHorizontalPixels = bmObj.hPixels;
}
```

## See also

[BitmapInstance.vPixels](../BitmapInstance_object/BitmapInstance3.md)
