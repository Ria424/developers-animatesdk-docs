# SymbolItem.exportToLibrary()

## Availability

Flash Pro CS6.

## Usage

SymbolItem.exportToLibrary(frameNumber, bitmapName)

## Parameters

**frameNumber** `integer`; An integer indicating the frame within the symbol to be exported.

**bitmapName** `string`; A string indicating the name of the new bitmap to be added to the Library.

## Returns

Nothing.

## Description

Method; Exports a frame from the selected instance of movie clip, graphic, or button symbol on the Stage to a bitmap in Library.

## Example

The following example exports the first frame of the currently selected symbol instance to a new bitmap in the library that will be called "mytestBitmap":

```javascript
fl.getDocumentDOM().library.item[0].exportToLibrary(1, "mytestBitmap");
```
