## Document.getPlayerVersion()

#### Availability

Flash CS3 Professional.

#### Usage

document.getPlayerVersion()

#### Parameters

None.

#### Returns

`string`; A string that represents the Flash Player version specified by using document.setPlayerVersion(). If no value has been set, returns the value specified in the Publish Settings dialog box.

#### Description

Method; returns a string that represents the targeted player version for the specified document. For a list of values that this method can return, see [Document.setPlayerVersion()](../Document_object/Document600.md).
To determine which version of ActionScript is being targeted in the specified file, use [Document.asVersion](../Document_object/Document21.md).

#### Example

The following example illustrates targeting specified player versions for the current document and then retrieving those values:

```javascript
fl.getDocumentDOM().setPlayerVersion("6");
var version = fl.getDocumentDOM().getPlayerVersion();
fl.trace(version) // displays "6"

fl.getDocumentDOM().setPlayerVersion("FlashPlayer10");
var version = fl.getDocumentDOM().getPlayerVersion();
fl.trace(version) // displays "FlashPlayer10"
```

#### See also

[Document.setPlayerVersion()](../Document_object/Document600.md)
