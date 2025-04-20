## Document.exportCanvasPublishTemplate()

#### Availability

Animate 2020.

#### Usage

Document.exportCanvasPublishTemplate(pathURI).

#### Parameters

**pathURI**: `string`; A string, expressed as a file:/// URI, that specifies the path of the generated HTML template.

#### Returns

`boolean`; True if exported successfully.False otherwise.

#### Description

Method; Exports the HTML5 Canvas Publishing Template for given document,at the specified location.This method is specific to HTML Canvas document only.

#### Example

The following example exports the HTML5 Canvas Publishing Template.

```javascript
var pathURI = "file:///C|/Users/username/desktop/CanvasTemplate.html";
var exportFlag = fl.getDocumentDOM().exportCanvasPublishTemplate(pathURI);
if (!exportFlag)
    fl.trace("Template could not be exported");
```
