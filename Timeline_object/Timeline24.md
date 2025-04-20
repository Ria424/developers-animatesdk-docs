## Timeline.getLayerProperty()

#### Availability

Flash MX 2004.

#### Usage

Timeline.getLayerProperty(property)

#### Parameters

**property** `string`; The name of the property whose value you want to retrieve. For a list of properties, see the Property summary for the [Frame object](../Frame_object/Frame_summary.md).

#### Returns

`any | undefined`; The value of the specified property. Animate looks at the layer’s properties to determine the type. If all the specified layers don’t have the same property value, Animate returns undefined.

#### Description

Method; Retrieves the specified property’s value for the selected layers.

#### Example

The following example retrieves the name of the top layer in the current document and displays it in the Output panel:

```javascript
fl.getDocumentDOM().getTimeline().currentLayer = 0;
var layerName = fl.getDocumentDOM().getTimeline().getLayerProperty("name");
fl.trace(layerName);
```
