# FontItem.bold

## Availability

Flash CS4 Professional.

## Description

Property; `boolean`; Specifies whether the Font item is bold (true) or not (false).

## Example

Assuming that the first item in the Library is a Font item, the following code displays true in the Output panel if it is bold, false if it is not, and then sets it to bold.

```javascript
var theItem = fl.getDocumentDOM().library.items[0];
fl.outputPanel.clear();
fl.trace("bold: " + theItem.bold);
theItem.bold = true;
fl.trace("bold: " + theItem.bold);
```
