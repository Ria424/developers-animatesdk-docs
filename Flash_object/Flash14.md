# Flash.contactSensitiveSelection

## Availability

Flash 8.

## Description

`boolean`; A boolean value that specifies whether Contact Sensitive selection mode is enabled (true) or not (false).

## Example

The following example shows how to disable Contact Sensitive selection mode before making a selection and then how to reset it to its original value after making the selection:

```javascript
var contact = fl.contactSensitiveSelection;
fl.contactSensitiveSelection = false;
// Insert selection code here.
fl.contactSensitiveSelection = contact;
```
