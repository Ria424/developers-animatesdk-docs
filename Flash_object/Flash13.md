# Flash.configURI

## Availability

Flash MX 2004.

## Usage

fl.configURI

## Description

Read-only property; `string`; A string that specifies the full path for the local user’s Configuration directory as a file:/// URI. See also [Flash.configDirectory](../Flash_object/Flash12.md).

## Example

The following example runs a specified script. Using fl.configURI lets you specify the location of the script without knowing which platform the script is running on.

```javascript
// To run a command in your commands menu, change "Test.Jsfl"
// to the command you want to run in the line below.
fl.runScript(fl.configURI + "Commands/Test.jsfl");
```
