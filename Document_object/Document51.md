## Document.distributeToLayers()

#### Availability

Flash MX 2004.

#### Usage

Document.distributeToLayers()

#### Parameters

None.

#### Returns

Nothing.

#### Description

Method; Performs a distribute-to-layers operation on the current selection—equivalent to selecting Distribute to Layers. This method displays an error if there is no selection.

#### Example

The following example distributes the current selection to layers:

```javascript
fl.getDocumentDOM().distributeToLayers();
```
