# VideoItem.sourceFileIsCurrent

## Availability

Flash CS4 Professional.

## Description

Read-only property: a Boolean value of true if the file modification date of the Library item is the same as the modification date (on disk) of the file that was imported; false otherwise.

## Example

Assuming that the first item in the Library is a video item, the following code displays "true" if the file that was imported has not been modified on disk since it was imported.

```javascript
var libItem = fl.getDocumentDOM().library.items[0];
fl.trace("fileIsCurrent = "+ libItem.sourceFileIsCurrent);
```

## See also

[VideoItem.fileLastModifiedDate](../VideoItem_object/VideoItem1.md), [VideoItem.sourceFilePath](../VideoItem_object/VideoItem5.md)
