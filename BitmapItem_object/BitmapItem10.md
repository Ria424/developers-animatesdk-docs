## BitmapItem.sourceFileIsCurrent

#### Availability

Flash CS4 Professional.

#### Usage

BitmapItem.sourceFileIsCurrent

#### Description

Read-only property; `boolean`; A boolean value of *true* if the file modification date of the Library item is the same as the modification date on disk of the file that was imported. *false* otherwise.

#### Example

```javascript
// Assuming the first item in the Library is a bitmap item, the following code displays "true" if the file that was imported has not been modified on disk since it was imported:

var libItem = fl.getDocumentDOM().library.items[0];
fl.trace("fileIsCurrent = " + libItem.sourceFileIsCurrent);
```

#### See also

- [BitmapItem.fileLastModifiedDate](../BitmapItem_object/BitmapItem3.md)
- [BitmapItem.sourceFilePath](../BitmapItem_object/BitmapItem11.md)
