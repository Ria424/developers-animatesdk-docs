# TextAttrs.bold

## Availability

Flash MX 2004.

## Description

Property; a Boolean value. A value of true causes text to appear with the bold version of the font.

## Example

The following example selects the first character of the selected Text object and sets the bold property to true:

```javascript
fl.getDocumentDOM().setTextSelection(0, 1);
fl.getDocumentDOM().setElementTextAttr("bold", true);
```
