# SymbolItem.sourceLibraryName

## Availability

Flash MX 2004.

## Usage

SymbolItem.sourceLibraryName

## Description

Property; `string`; Specifies the name of the item in the source file library. It is used for shared library symbols.

## Example

The following example shows the value of the sourceLibraryName property in the Output panel:

```javascript
fl.trace(fl.getDocumentDOM().library.items[0].sourceLibraryName);
```
