# Document.pathURI

## Availability

Flash CS4 Professional.

## Description

Read-only property; `string`; A string that represents the path of the document, expressed as a file:/// URI. If the document has never been saved, this property is undefined.

## Example

The following example displays the path of the first document in the documents array as a file:/// URI string in the Output panel. You must save the document before running this script. In the example,the file is named test.fla and is saved in the My Documents folder on a Windows computer.

```javascript
var filePathURI = flash.documents[0].pathURI;
fl.trace(filePathURI);

// display file: ///C|\documents%20and%20Settings/<userName>/My%20Documents/test.fla
```

## See also

[Document.path](../Document_object/Document190.md)
