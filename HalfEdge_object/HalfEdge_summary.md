# HalfEdge summary

## Availability

Flash MX 2004.

## Description

The HalfEdge object is the directed side of the edge of a [Shape object](../Shape_object/Shape_summary.md). An edge has two half edges. You can transverse the contours of a shape by "walking around" these half edges. For example, starting from a half edge, you can trace all the half edges around a contour of a shape, and return to the original half edge.
Half edges are ordered. One half edge represents one side of the edge; the other half edge represents the other side.

## Method summary

The following methods are available for the HalfEdge object:

| **Method** | **Description** |
| --- | --- |
| [HalfEdge.getEdge()](../HalfEdge_object/HalfEdge.md) | Gets the [Edge object](../Edge_object/Edge_summary.md) for the HalfEdge object. |
| [HalfEdge.getNext()](../HalfEdge_object/HalfEdge1.md) | Gets the next half edge on the current contour. |
| [HalfEdge.getOppositeHalfEdge()](../HalfEdge_object/HalfEdge2.md) | Gets the HalfEdge object on the other side of the edge. |
| [HalfEdge.getPrev()](../HalfEdge_object/HalfEdge3.md) | Gets the preceding HalfEdge object on the current contour. |
| [HalfEdge.getVertex()](../HalfEdge_object/HalfEdge4.md) | Gets the [Vertex object](../Vertex_object/Vertex_summary.md) at the head of the HalfEdge object. |

## Property summary

The following properties are available for the HalfEdge object:

| **Property** | **Description** |
| --- | --- |
| [HalfEdge.id](../HalfEdge_object/HalfEdge5.md) | Read-only; a unique integer identifier for the HalfEdge object. |
