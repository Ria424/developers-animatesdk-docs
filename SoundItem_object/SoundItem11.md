## SoundItem.sourceFileIsCurrent

#### Availability

Flash CS4 Professional.

#### Usage

*soundItem.sourceFileIsCurrent*

#### Description

Read-only property: a Boolean value of true if the file modification date of the Library item is the same as the modification date on disk of the file that was imported; false otherwise.

#### Example

Assuming that the first item in the Library is a sound item, the following code displays "true" if the file that was imported has not been modified on disk since it was imported.

```javascript
var libItem = fl.getDocumentDOM().library.items[0];
fl.trace("fileIsCurrent = "+ libItem.sourceFileIsCurrent);
```

#### See also

[SoundItem.fileLastModifiedDate](../SoundItem_object/SoundItem5.md), [SoundItem.sourceFilePath](../SoundItem_object/SoundItem12.md)
