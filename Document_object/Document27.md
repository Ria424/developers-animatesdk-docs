## Document.canTestMovie()

#### Availability

Flash MX 2004.

#### Usage

document.canTestMovie()

#### Parameters

None.

#### Returns

`boolean`; A boolean value: true if you can use the [Document.testMovie()](../Document_object/Document5948.md) method successfully: false otherwise.

#### Description

Method; determines whether you can use the [Document.testMovie()](../Document_object/Document5948.md) method successfully.

#### Example

The following example tests whether fl.getDocumentDOM().testMovie() can be used. If so, it calls the method.

```javascript
if (fl.getDocumentDOM().canTestMovie()) {
    fl.getDocumentDOM().testMovie();
}
```

#### See also

[Document.canTestScene()](../Document_object/Document28.md), [Document.testScene()](../Document_object/Document5979.md)
