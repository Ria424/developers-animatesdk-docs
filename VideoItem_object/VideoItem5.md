# VideoItem.sourceFilePath

## Availability

Flash 8.

## Description

Read-only property; a string, expressed as a file:/// URI that specifies the path to the video item.

## Example

The following example displays the name and source file path of any items in the library that are of type video:

```javascript
for (idx in fl.getDocumentDOM().library.items) {
    if (fl.getDocumentDOM().library.items[idx].itemType == "video") {
        var myItem = fl.getDocumentDOM().library.items[idx];
        fl.trace(myItem.name + " source is " + myItem.sourceFilePath);
    }
}
```

## See also

[VideoItem.sourceFileExists](../VideoItem_object/VideoItem3.md)
