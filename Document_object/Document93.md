## Document.importFile()

#### Availability

Flash 8. The showDialog and showImporterUI parameters are new in Adobe Animate.

#### Usage

Document.importFile(fileURI [, importToLibrary [, showDialog [, showImporterUI ]]])

#### Parameters

**fileURI** `string`; A string, expressed as a file:/// URI, that specifies the path of the file to import.

**importToLibrary** `boolean?false`; Specifies whether to import the file only into the document’s library (true) or to also place a copy on the Stage (false). The default value is false.

**showDialog** `boolean?true`; Specifies whether to display the Import dialog box. Specifying true displays the import dialog. If you specify false, the function imports the file using specifications set in the Preferences dialog. The default is true.

**showImporterUI** `boolean?false`; Specifies whether to display errors visually (for example, using the Library Conflict dialog box). The default is false.

#### Returns

Nothing.

#### Description

Method; Imports a file into a document. This method performs the same operation as the Import To Library or Import To Stage menu command. To import a publish profile, use [Document.importPublishProfile()](../Document_object/Document94.md).

#### Example

The following example lets the user browse for a file to import onto the Stage:

```javascript
var dom = fl.getDocumentDOM();
var URI = fl.browseForFileURL("select", "Import File");
dom.importFile(URI);
```

#### See also

[Flash.browseForFileURL()](../Flash_object/Flash3.md).
