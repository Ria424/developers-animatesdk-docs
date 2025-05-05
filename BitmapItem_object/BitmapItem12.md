# BitmapItem.useDeblocking

## Availability

Flash CS4 Professional.

## Usage

BitmapItem.useDeblocking

## Description

Property; `boolean`; Specifies whether deblocking is enabled (*true*) or not (*false*).

## Example

```javascript
// Assuming the first item in the Library is a bitmap item, the following code enables deblocking for the item:

var libItem = fl.getDocumentDOM().library.items[0];
libItem.useDeblocking = true;
```
