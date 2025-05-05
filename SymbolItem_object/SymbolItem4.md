# SymbolItem.exportToPNGSequence()

## Availability

Flash Pro CS6.

## Usage

SymbolItem.exportToPNGSequence(outputURI [, startFrameNum ] [, endFrameNum ] [, matrix])

## Parameters

**outputURI** `string`; The URI to export the PNG sequence files to. This URI must reference a local file. For example: file:///c|/tests/mytest.png.

**startFrameNum** `integer`; An integer indicating the first frame within the symbol to be exported. If this parameter is omitted, all frames are exported.

**endFrameNum** `integer`; An integer indicating the last frame within the symbol to be exported. If this parameter is omitted, all frames are exported.

**matrix** `Matrix?`; Optional. A matrix to be appended to the exported PNG sequence.

## Returns

Nothing.

## Description

Method; Exports a movie clip, graphic, or button symbol to a sequence of PNG files on disk.

## Example

The following example exports the first symbol in the Library new sequence of numbered PNG files starting with the filename"myTest.png":

```javascript
fl.getDocumentDOM().library.items[0].exportToPNGSequence("file:///c|/tests/mytest.png");
```
