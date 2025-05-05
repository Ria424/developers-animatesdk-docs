# SymbolItem.timeline

## Availability

Flash MX 2004.

## Usage

SymbolItem.timeline

## Description

Read-only property; `Timeline`; A [Timeline object](../Timeline_object/Timeline_summary.md).

## Example

The following example obtains and shows the number of layers that the selected movie clip in the library contains:

```javascript
var tl = fl.getDocumentDOM().library.getSelectedItems()[0].timeline;
alert(tl.layerCount);
```
