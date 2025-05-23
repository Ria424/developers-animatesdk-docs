# BitmapItem.sourceFilePath

## Availability

Flash CS4 Professional.

## Description

Read-only property; `string`; A string, expressed as a file:/// URI, that represents the path and name of the file that was imported into the Library.

## Example

The following example displays the name and source file path of any items in the library that are of type "bitmap":

```javascript
for (idx in fl.getDocumentDOM().library.items) {
    if (fl.getDocumentDOM().library.items[idx].itemType == "bitmap") {
        var myItem = fl.getDocumentDOM().library.items[idx];
        fl.trace(myItem.name + " source is " + myItem.sourceFilePath);
    }
}
```

## See also

[BitmapItem.sourceFileExists](../BitmapItem_object/BitmapItem9.md)
