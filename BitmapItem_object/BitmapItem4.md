# BitmapItem.hasValidAlphaLayer

## Availability

Flash CS6 Professional.

## Type

```typescript
boolean
```

## Description

Read-only property; A boolean indicating if a bitmap in the library has a valid/useful alpha channel. This flag will help you decide if you should export the bitmap item as a PNG instead of a JPEG using the `BitmapItem.exportToFile()` function.

## Example

The following code exports a library item with the proper file name extension depending on whether it has a valid alpha layer.

```javascript
var bitmapItem = fl.getDocumentDOM().library.items[0];
var uri = fl.browseForFileURI("open");
if (bitmapItem.hasValidAlphaLayer) {
    uri += ".png";
} else {
    uri += ".jpg";
}
bitmapItem.exportToFile(uri);
```

## See also

- [BitmapItem.sourceFileExists](../BitmapItem_object/BitmapItem9.md)
- [BitmapItem.sourceFileIsCurrent](../BitmapItem_object/BitmapItem10.md)
- [BitmapItem.sourceFilePath](../BitmapItem_object/BitmapItem11.md)
- [FLfile.getModificationDate()](../FLfile_object/FLfile6.md)
