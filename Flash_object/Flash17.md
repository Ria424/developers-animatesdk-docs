# Flash.createNewDocList

## Availability

Flash MX 2004.

## Description

Read-only property; `string[]`; an array of strings that represent the various types of documents that can be created.

## Example

The following example displays the types of documents that can be created, in the Output panel:

```javascript
fl.trace("Number of choices " + fl.createNewDocList.length);
for (var i = 0; i < fl.createNewDocList.length; i++)
    fl.trace("choice: " + fl.createNewDocList[i]);
```
