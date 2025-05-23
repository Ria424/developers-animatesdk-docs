# Flash.getThemeFontInfo()

## Availability

Adobe Animate.

## Usage

fl.getThemeFontInfo(infoType, size)

## Parameters

**infoType** A string that contains one of the following:

- fontStyle - Return the font style for the size specified by the *size* parameter.

- fontSize - Return the font size for the size specified by the *size* parameter.

**size** A string that specifies either "large" or "small".

## Returns

A String containing either the font style or the font size for the specifie size.

## Description

Method; returns either the font Style or the font Size that is used to draw the UI of the specified size.

## Example

The following example illustrates the use of this method:

```javascript
fl.getThemeFontInfo("fontStyle", "large"); // Return the fontStyle for large size
fl.getThemeFontInfo("fontStyle", "small"); // Return the fontStyle for small size
fl.getThemeFontInfo("fontSize", "large"); // Return the fontSize for large size
fl.getThemeFontInfo("fontSize", "small"); // Return the fontSize for small size
```
