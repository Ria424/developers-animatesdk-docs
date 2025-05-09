# BitmapItem.allowSmoothing

## Availability

Flash MX 2004.

## Description

Property; `boolean`; A boolean value that specifies whether to allow smoothing of a bitmap *(true)* or not *(false)*.

## Example

The following code sets the allowSmoothing property of the first item in the library of the current document to true:

```javascript
fl.getDocumentDOM().library.items[0].allowSmoothing = true;
alert(fl.getDocumentDOM().library.items[0].allowSmoothing);
```
