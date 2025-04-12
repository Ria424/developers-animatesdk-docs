## SoundItem.fileLastModifiedDate

#### Availability

Flash CS4 Professional.

#### Usage

*soundItem.fileLastModifiedDate*

#### Description

Read-only property: a string containing a hexadecimal number that represents the number of seconds that have elapsed between January 1, 1970, and the modification date of the original file (on disk) at the time the file was imported to the library. If the file no longer exists, this value is "00000000".

#### Example

Assuming that the first item in the Library is a sound item, the following code displays a hexadecimal number as described above.

```javascript
var libItem = fl.getDocumentDOM().library.items[0];
fl.trace("Mod date when imported = " + libItem.fileLastModifiedDate);
```

#### See also

[SoundItem.sourceFileExists](../SoundItem_object/SoundItem10.md), [SoundItem.sourceFileIsCurrent](../SoundItem_object/SoundItem11.md), [SoundItem.sourceFilePath](../SoundItem_object/SoundItem12.md), [FLfile.getModificationDate()](../FLfile_object/FLfile6.md)
