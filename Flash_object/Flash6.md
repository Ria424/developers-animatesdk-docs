# Flash.clipCopyString()

## Availability

Flash CS3 Professional.

## Usage

fl.clipCopyString(string)

## Parameters

**string** `string`; A string to be copied to the Clipboard.

## Returns

Nothing.

## Description

Method; copies the specified string to the Clipboard.
To copy the current selection to the Clipboard, use [Document.clipCopy()](../Document_object/Document30.md).

## Example

The following example copies the path of the current document to the Clipboard:

```javascript
var documentPath = fl.getDocumentDOM().path;
fl.clipCopyString(documentPath);
```
