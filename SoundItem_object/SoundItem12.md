# SoundItem.sourceFilePath

## Availability

Flash CS4 Professional.

## Description

Read-only property: a string, expressed as a file:/// URI, that represents the path and name of the file that was imported into the Library.

## Example

The following example displays the name and source file path of any items in the library that are of type "sound":

```javascript
for (idx in fl.getDocumentDOM().library.items) {
    if (fl.getDocumentDOM().library.items[idx].itemType == "sound") {
        var myItem = fl.getDocumentDOM().library.items[idx];
        fl.trace(myItem.name + " source is " + myItem.sourceFilePath);
    }
}
```

## See also

[SoundItem.sourceFileExists](../SoundItem_object/SoundItem10.md)
