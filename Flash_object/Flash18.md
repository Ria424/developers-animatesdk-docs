# Flash.createNewDocListType

## Availability

Flash MX 2004.

## Description

Read-only property; `string[]`; an array of strings that represent the file extensions of the types of documents that can be created. The entries in the array correspond directly (by index) to the entries in the [Flash.createNewDocList](../Flash_object/Flash17.md) array.

## Example

The following example displays the extensions of the types of documents that can be created, in the Output panel:

```javascript
fl.trace("Number of types " + fl.createNewDocListType.length);
for (var i = 0; i < fl.createNewDocListType.length; i++)
    fl.trace("type: " + fl.createNewDocListType[i]);
```
