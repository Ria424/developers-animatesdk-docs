# Flash.createNewTemplateList

## Availability

Flash MX 2004.

## Description

Read-only property; `string[]`; an array of strings that represent the various types of templates that can be created.

## Example

The following example displays the types of templates that can be created, in the Output panel:

```javascript
fl.trace("Number of template types: " + fl.createNewTemplateList.length);
for (var i = 0; i < fl.createNewTemplateList.length; i++)
    fl.trace("type: " + fl.createNewTemplateList[i]);
```
