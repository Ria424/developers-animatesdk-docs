# FontItem.bitmap

## Availability

Flash CS4 Professional.

## Description

Property; `boolean`; Specifies whether the Font item is bitmapped (true) or not (false).

## Example

Assuming that the first item in the Library is a Font item, the following code displays true in the Output panel if it is bitmapped, false if it is not:

```javascript
var theItem = fl.getDocumentDOM().library.items[0];
fl.trace("bitmap: " + theItem.bitmap);
```
