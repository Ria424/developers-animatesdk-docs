# Shape.contours

## Availability

Flash MX 2004.

## Description

Read-only property; an array of Contour objects for the shape (see [Contour object](../Contour_object/Contour_summary.md)).

## Example

The following example stores the first contour in the contours array in the *c* variable and then stores the [HalfEdge object](../HalfEdge_object/HalfEdge_summary.md) of that contour in the he variable:

```javascript
var c = fl.getDocumentDOM().selection[0].contours[0];
var he = c.getHalfEdge();
```
