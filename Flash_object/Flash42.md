# Flash.mruRecentFileList

## Availability

Flash MX 2004.

## Description

Read-only property; an array of the complete filenames in the Most Recently Used (MRU) list that the Flash authoring tool manages.

## Example

The following example displays the number of recently opened files and the name of each file, in the Output panel:

```javascript
fl.trace("Number of recently opened files: " + fl.mruRecentFileList.length);
for (var i = 0; i < fl.mruRecentFileList.length; i++) {
    fl.trace("file: " + fl.mruRecentFileList[i]);
}
```
