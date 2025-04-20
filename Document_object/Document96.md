## Document.importSWF() - dropped

#### Availability

Flash MX 2004. *Dropped in Adobe Animate.*

#### Usage

document.importSWF(fileURI)

#### Parameters

**fileURI** `string`; A string, expressed as a file:/// URI, that specifies the file for the SWF file to import.

#### Returns

Nothing.

#### Example

The following example imports the "mySwf.swf" file from the Flash Configuration folder:

```javascript
fl.getDocumentDOM().importSWF(fl.configURI + "mySwf.swf");
```

#### See also

[Document.importFile()](../Document_object/Document93.md)
