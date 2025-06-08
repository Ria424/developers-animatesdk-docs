# SymbolItem.exportSWF()

## Availability

Flash MX 2004.

## Usage

SymbolItem.exportSWF(outputURI)

## Parameters

### **outputURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the SWF file to which the method will export the symbol. The *outputURI* must reference a local file. Flash does not create a folder if *outputURI* doesn’t exist.

## Returns

Nothing.

## Description

Method; Exports the symbol item to a SWF file.

## Example

The following example exports an item in the library to the my.swf file in the tests folder:

```javascript
fl.getDocumentDOM().library.items[0].exportSWF("file:///c|/tests/my.swf");
```
