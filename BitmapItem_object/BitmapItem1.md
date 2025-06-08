# BitmapItem.compressionType

## Availability

Flash MX 2004.

## Type

```typescript
"photo" | "lossless"
```

## Description

Property; A string that determines the type of image compression applied to the bitmap. Acceptable values are "photo" or "lossless". If the value of `BitmapItem.useImportedJPEGQuality` is false, "photo" corresponds to JPEG with a quality from 0 to 100; if `BitmapItem.useImportedJPEGQuality` is true, "photo" corresponds to JPEG using the default document quality value. The value "lossless" corresponds to GIF or PNG format (see [BitmapItem.useImportedJPEGQuality](../BitmapItem_object/BitmapItem13.md)).

## Example

The following code sets the compressionType property of the first item in the library of the current document to "photo":

```javascript
fl.getDocumentDOM().library.items[0].compressionType = "photo";
alert(fl.getDocumentDOM().library.items[0].compressionType);
```
