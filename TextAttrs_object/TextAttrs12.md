# TextAttrs.lineSpacing

## Availability

Flash MX 2004.

## Description

Property; an integer that specifies the line spacing (*leading*) of the paragraph. Acceptable values are -360 through 720.

## Example

The following example sets the selected text field’s lineSpacing property to 100:

```javascript
fl.getDocumentDOM().selection[0].setTextAttr("lineSpacing", 100);
```
