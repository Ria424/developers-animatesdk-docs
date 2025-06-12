# TextureAtlasExporter.exportTextureAtlas()

## Availability

Animate 2020.

## Usage

TextureAtlasExporter.exportTextureAtlas(symbol, path)

## Parameters

### **symbol**

#### Type

```typescript
SymbolItem | SymbolInstance
```

#### Description

The SymbolItem or SymbolInstance on which texture atlas should be generated.

## Returns

### Type

```typescript
boolean
```

## Description

Method; Exports the texture atlas for the selected symbol.

## Example

``` javascript
var exporter = new TextureAtlasExporter;
var symbolsArr = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements;
exporter.exportTextureAtlas(symbolsArr[0].libraryItem);
````
