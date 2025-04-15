## Document.testMovie()

#### Availability

Flash MX 2004.

#### Usage

document.testMovie([abortIfErrorsExist])

#### Parameters

**abortIfErrorsExist** `boolean`; the default value is false. If set to true, the test movie session will not start and the .swf window will not open if there are compiler errors. Compiler warnings will not abort the command. This parameter was added in Flash Professional CS5.
***Note:** This parameter doesn't seem to work in Adobe Animate 2023.*

#### Returns

Nothing.

#### Description

Method; executes a Test Movie operation on the document.

#### Example

The following example tests the movie for the current document, but aborts the test movie if compiler errors exist:

```javascript
fl.getDocumentDOM().testMovie(true);
```

#### See also

[Document.canTestMovie()](../Document_object/Document27.md), [Document.testScene()](../Document_object/Document5979.md)
