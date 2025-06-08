# BitmapInstance.vPixels

## Availability

Flash MX 2004.

## Type

```typescript
number
```

## Description

Read-only property; An integer that represents the height of the bitmap—that is, the number of pixels in the vertical dimension.

## Example

The following code gets the height of the bitmap in pixels:

```javascript
// Get the number of pixels in the vertical dimension.
var bmObj = fl.getDocumentDOM().selection[0];
var isBitmap = bmObj.instanceType;
if (isBitmap == "bitmap") {
    var numVerticalPixels = bmObj.vPixels;
}
```

## See also

[BitmapInstance.hPixels](../BitmapInstance_object/BitmapInstance1.md)
