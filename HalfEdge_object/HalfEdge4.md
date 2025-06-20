# HalfEdge.getVertex()

## Availability

Flash MX 2004.

## Usage

halfEdge.getVertex()

## Parameters

None.

## Returns

A [Vertex object](../Vertex_object/Vertex_summary.md)

### Type

```typescript
Vertex
```

## Description

Method; gets the Vertex object at the head of the HalfEdge object. See [Vertex object](../Vertex_object/Vertex_summary.md)

## Example

The following example stores the Vertex object at the head of hEdge in the vertex variable:

```javascript
var shape = fl.getDocumentDOM().selection[0];
var edge = shape.edges[0];
var hEdge = edge.getHalfEdge(0);
var vertex = hEdge.getVertex();
```
