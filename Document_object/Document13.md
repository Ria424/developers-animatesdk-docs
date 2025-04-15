## Document.align()

#### Availability

Flash MX 2004.

#### Usage

document.align(alignmode [, bUseDocumentBounds])

#### Parameters

**alignmode** `"left" | "right" | "top" | "bottom" | "vertical center" | "horizontal center"`; A string that specifies how to align the selection. Acceptable values are "left", "right", "top", "bottom", "vertical center", and "horizontal center".

**bUseDocumentBounds** `boolean`; A boolean value that, if set to true, causes the method to align to the bounds of the document. Otherwise, the method uses the bounds of the selected objects. The default is false. This parameter is optional.

#### Returns

Nothing.

#### Description

Method; aligns the selection.

#### Example

The following example aligns objects to the left and to the Stage. This is equivalent to turning on the To Stage setting in the Align panel and clicking the Align to Left button:

```javascript
fl.getDocumentDOM().align("left", true);
```

#### See also

[Document.distribute()](../Document_object/Document49.md), [Document.getAlignToDocument()](../Document_object/Document72.md), [Document.setAlignToDocument()](../Document_object/Document450.md)
