## Document.setAlignToDocument()

#### Availability

Flash MX 2004.

#### Usage

Document.setAlignToDocument(bToStage)

#### Parameters

**bToStage** `boolean`; A boolean value that, if set to true, aligns objects to the Stage. If set to false, it does not.

#### Returns

Nothing.

#### Description

Method; Sets the preferences for [Document.align()](../Document_object/Document13.md), [Document.distribute()](../Document_object/Document49.md), [Document.match()](../Document_object/Document120.md), and [Document.space()](../Document_object/Document67.md) to act on the document. This method is equivalent to enabling the To Stage button in the Align panel.

#### Example

The following example enables the To Stage button in the Align panel to align objects with the Stage:

```javascript
fl.getDocumentDOM().setAlignToDocument(true);
```

#### See also

[Document.getAlignToDocument()](../Document_object/Document72.md)
