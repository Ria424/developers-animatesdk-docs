# Flash.mruRecentFileListType

## Availability

Flash MX 2004.

## Description

Read-only property; an array of the file types in the MRU list that the Flash authoring tool manages. This array corresponds to the array in the [Flash.mruRecentFileList](../Flash_object/Flash42.md) property.

## Example

The following example displays the number of recently opened files and the type of each file, in the Output panel:

```javascript
fl.trace("Number of recently opened files: " + fl.mruRecentFileListType.length);
for (var i = 0; i < fl.mruRecentFileListType.length; i++) {
    fl.trace("type: " + fl.mruRecentFileListType[i]);
}
```
