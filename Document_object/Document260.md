## Document.removeDataFromSelection()

#### Availability

Flash MX 2004.

#### Usage

document.removeDataFromSelection(name)

#### Parameters

**name** `string`; A string that specifies the name of the persistent data to remove.

#### Returns

Nothing.

#### Description

Method; removes persistent data with the specified name that has been attached to the selection.

#### Example

The following example removes from the selection the persistent data named "myData":

```javascript
fl.getDocumentDOM().removeDataFromSelection("myData");
```

#### See also

[Document.addDataToSelection()](../Document_object/Document2.md)
