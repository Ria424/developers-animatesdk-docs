# BitmapItem.quality

## Availability

Flash MX 2004.

## Description

Property; `integer`; Specifies the quality of the bitmap. To use the default document quality, specify -1; otherwise, specify an integer from 0 to 100. Available only for JPEG compression.

## Example

The following code sets the quality property of the first item in the library of the current document to 65:

```javascript
fl.getDocumentDOM().library.items[0].quality = 65;
alert(fl.getDocumentDOM().library.items[0].quality);
```
