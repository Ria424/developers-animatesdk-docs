# Document.getAlignToDocument()

## Availability

Flash MX 2004.

## Usage

Document.getAlignToDocument()

## Parameters

None.

## Returns

`boolean`; true if the preference is set to align the objects to the Stage; false otherwise.

## Description

Method; identical to retrieving the value of the To Stage button in the Align panel. Gets the preference that can be used for [Document.align()](../Document_object/Document13.md), [Document.distribute()](../Document_object/Document49.md), [Document.match()](../Document_object/Document120.md), and [Document.space()](../Document_object/Document67.md) methods on the document.

## Example

The following example retrieves the value of the To Stage button in the Align panel. If the return value is true, the To Stage button is active; otherwise, it is not.

```javascript
var isAlignToDoc = fl.getDocumentDOM().getAlignToDocument();
fl.getDocumentDOM().align("left", isAlignToDoc);
```

## See also

[Document.setAlignToDocument()](../Document_object/Document450.md)
