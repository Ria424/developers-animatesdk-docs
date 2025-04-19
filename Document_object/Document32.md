## Document.clipPaste()

#### Availability

Flash MX 2004.

#### Usage

Document.clipPaste([bInPlace])

#### Parameters

**bInPlace** `boolean?false`; A boolean value that, when set to true, causes the method to perform a paste-in-place operation. The default value is false, which causes the method to perform a paste operation to the center of the document. This parameter is optional.

#### Returns

Nothing.

#### Description

Method; Pastes the contents of the Clipboard into the document.

#### Example

The following example pastes the Clipboard contents to the center of the document:

```javascript
fl.getDocumentDOM().clipPaste();
```

The following example pastes the Clipboard contents in place in the current document:

```javascript
fl.getDocumentDOM().clipPaste(true);
```

#### See also

- [Document.clipCopy()](../Document_object/Document30.md)
- [Document.clipCut()](../Document_object/Document31.md)
- [Flash.clipCopyString()](../Flash_object/Flash6.md).
