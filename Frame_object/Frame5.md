# Frame.elements

## Availability

Flash MX 2004.

## Description

Read-only property; `Element[]`; An array of [Element object](../Element_object/Element_summary.md)s. The order of elements is the order in which they are stored in the FLA file. If there are multiple shapes on the Stage, and each is ungrouped, Flash treats them as one element. If each shape is grouped, so there are multiple groups on the Stage, Flash sees them as separate elements. In other words, Flash treats raw, ungrouped shapes as a single element, regardless of how many separate shapes are on the Stage. If a frame contains three raw, ungrouped shapes, for example, then elements.length in that frame returns a value of 1. To work around this issue, select each shape individually and group it .

## Example

The following example stores an array of current elements in the top layer, first frame in the myElements variable:

```javascript
var myElements = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements;
```
