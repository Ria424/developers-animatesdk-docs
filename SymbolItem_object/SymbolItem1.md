## SymbolItem.exportSWC()

#### Availability

Flash MX 2004.

#### Usage

SymbolItem.exportSWC(outputURI)

#### Parameters

**outputURI** `string`; A string, expressed as a file:/// URI, that specifies the SWC file to which the method will export the symbol. The *outputURI* must reference a local file. Flash does not create a folder if *outputURI* does not exist.

#### Returns

Nothing.

#### Description

Method; Exports the symbol item to a SWC file.

#### Example

The following example exports an item in the library to the SWC file named mySymbol.swc in the tests folder:

```javascript
fl.getDocumentDOM.library.selectItem("mySymbol");
var currentSelection = fl.getDocumentDOM().library.getSelectedItems();
currentSelection[0].exportSWC("file:///Macintosh HD/SWCDirectory/mySymbol.swc");
```
