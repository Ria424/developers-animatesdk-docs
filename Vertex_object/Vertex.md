## Vertex.getHalfEdge()

#### Availability

Flash MX 2004.

#### Usage

Vertex.getHalfEdge()

#### Parameters

None.

#### Returns

`HalfEdge`; A [HalfEdge object](../HalfEdge_object/HalfEdge_summary.md).

#### Description

Method; Gets a [HalfEdge object](../HalfEdge_object/HalfEdge_summary.md) that shares this vertex.

#### Example

The following example shows how to get other half edges that share the same vertex:

```javascript
var shape = fl.getDocumentDOM().selection[0];
var hEdge = shape.edges[0].getHalfEdge(0);
var theVertex = hEdge.getVertex();
var someHEdge = theVertex.getHalfEdge(); // Not necessarily the same half edge 
var theSameVertex = someHEdge.getVertex();
fl.trace("the same vertex: " + theSameVertex);
```
