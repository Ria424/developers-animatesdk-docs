# SymbolInstance.actionScript - dropped

## Availability

Flash MX 2004. *Dropped in Adobe Animate*.

## Description

Property; `string`; Specifies the actions assigned to the symbol. This applies only to movie clip and button instances. For a graphic symbol instance, the value returns undefined.

## Example

The following example assigns an onClipEvent action to the first item in the first frame of the first layer in the timeline:

```javascript
fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].actionScript = "onClipEvent(enterFrame) {trace('movie clip enterFrame');}";
```
