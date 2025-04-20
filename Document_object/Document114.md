## Document.swapElement()

#### Availability

Flash MX 2004.

#### Usage

Document.swapElement(name)

#### Parameters

**name** `string`; The name of the library item to use.

#### Returns

Nothing.

#### Description

Method; Swaps the current selection with the specified one. The selection must contain a graphic, button, movie clip, video, or bitmap. This method displays an error message if no object is selected or the given object could not be found.

#### Example

The following example swaps the current selection with Symbol 1 from the library:

```javascript
fl.getDocumentDOM().swapElement("Symbol 1");
```
