# Flash.packagePaths - dropped

## Availability

Flash CS3 Professional. *Dropped in Adobe Animate*.

## Description

Property; `string`; A string that corresponds to the global Classpath setting in the ActionScript 2.0 Settings dialog box. Class paths within the string are delimited with semi-colons (;). To view or change ActionScript 3.0 Classpath settings, use [Flash.as3PackagePaths](../Flash_object/Flash2.md).

## Example

The following example illustrates changing the ActionScript 2.0 Classpath settings:

```javascript
fl.trace(fl.packagePaths);
// Output (assuming started with default value)
// .;$(LocalData)/Classes
fl.packagePaths = "buying;selling";
fl.trace(fl.packagePaths);
// Output
// buying; selling
```

## See also

[Flash.resetPackagePaths() - dropped](../Flash_object/Flash60.md)
