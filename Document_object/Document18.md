# Document.as3ExportFrame

## Availability

Flash CS3 Professional.

## Description

Property; `integer`; Specifies in which frame to export ActionScript 3.0 classes. By default, classes are exported in Frame 1.

## Example

The following example changes the frame in which classes are exported from 1 (the default) to 5.

```javascript
var myDocument = fl.getDocumentDOM();
fl.outputPanel.trace("'Export classes in frame:' value before modification is " + myDocument.as3ExportFrame);
myDocument.as3ExportFrame = 5;
fl.outputPanel.trace("'Export classes in frame:' value after modification is " + myDocument.as3ExportFrame);
```
