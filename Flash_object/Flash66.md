# Flash.scriptURI

## Availability

Flash CS3 Professional.

## Description

Read-only property; a string that represents the path of the currently running JSFL script, expressed as a file:/// URI. If the script was called from [Flash.runScript()](../Flash_object/Flash62.md), this property represents the path of the immediate parent script. That is, it doesn’t traverse multiple calls to [Flash.runScript()](../Flash_object/Flash62.md) to find the path of the original calling script.

## Example

The following example displays the path of the currently running JSFL script in the Output panel:

```javascript
fl.trace(fl.scriptURI);
```

## See also

[Flash.runScript()](../Flash_object/Flash62.md)
