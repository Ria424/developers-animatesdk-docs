# BitmapItem.sourceFileExists

## Availability

Flash CS4 Professional.

## Description

Read-only property; `boolean`; A boolean value of true if the file that was imported to the Library still exists in the location from where it was imported; false otherwise.

## Example

```javascript
// Assuming the first item in the Library is a bitmap item, the following code displays "true" if the file that was imported into the Library still exists.

var libItem = fl.getDocumentDOM().library.items[0];
fl.trace("sourceFileExists = " + libItem.sourceFileExists);
```

## See also

- [BitmapItem.sourceFileIsCurrent](../BitmapItem_object/BitmapItem10.md)
- [BitmapItem.sourceFilePath](../BitmapItem_object/BitmapItem11.md)
