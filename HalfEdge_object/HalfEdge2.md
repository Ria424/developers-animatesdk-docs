# HalfEdge.getOppositeHalfEdge()

## Availability

Flash MX 2004.

## Usage

halfEdge.getOppositeHalfEdge()

## Parameters

None.

## Returns

A HalfEdge object.

### Type

```typescript
HalfEdge
```

## Description

Method; gets the HalfEdge object on the other side of the edge.

## Example

The following example stores the half edge opposite hEdge in the otherHalfEdge variable:

```javascript
var shape = fl.getDocumentDOM().selection[0];
var hEdge = shape.edges[0].getHalfEdge(0);
var otherHalfEdge = hEdge.getOppositeHalfEdge();
```
