## VideoItem.sourceFileExists

#### Availability

Flash CS4 Professional.

#### Usage

*videoItem.sourceFileExists*

#### Description

Read-only property: a Boolean value of true if the file that was imported to the Library still exists in the location from where it was imported; false otherwise.

#### Example

Assuming that the first item in the Library is a video item, the following code displays "true" if the file that was imported into the Library still exists.

```javascript
var libItem = fl.getDocumentDOM().library.items[0];
fl.trace("sourceFileExists = "+ libItem.sourceFileExists);
```

#### See also

[VideoItem.sourceFileIsCurrent](../VideoItem_object/VideoItem4.md), [VideoItem.sourceFilePath](../VideoItem_object/VideoItem5.md)
