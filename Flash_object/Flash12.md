# Flash.configDirectory

## Availability

Flash MX 2004.

## Description

Read-only property; `string`; A string that specifies the full path for the local user’s Configuration directory in a platform- specific format. To specify this path as a file:/// URI, which is not platform-specific, use [Flash.configURI](../Flash_object/Flash13.md).

## Example

The following example displays the Configuration directory in the Output panel:

```javascript
fl.trace("My local configuration directory is " + fl.configDirectory);
```
