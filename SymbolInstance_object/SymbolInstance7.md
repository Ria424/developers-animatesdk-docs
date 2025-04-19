## SymbolInstance.cacheAsBitmap

#### Availability

Flash 8.

#### Usage

SymbolInstance.cacheAsBitmap

#### Description

Property; `boolean`; Specifies whether run-time bitmap caching is enabled.

***Note:** Starting w/ Flash Professional CS5.5, users should switch to using the ["SymbolInstance.bitmapRenderMode"](../SymbolInstance_object/SymbolInstance3.md) property instead of this property.*

#### Example

The following example enables run-time bitmap caching for the first element in the first frame on the first layer:

```javascript
fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].cacheAsBitmap = true;
```
