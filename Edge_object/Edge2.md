# Edge.getHalfEdge()

## Availability

Flash MX 2004.

## Usage

Edge.getHalfEdge(index)

## Parameters

### **index**

#### Type

```typescript
number
```

#### Description

Specifies which half edge to return. The value of *index* must be either 0 for the first half edge or 1 for the second half edge.

## Returns

A HalfEdge object.

### Type

```typescript
HalfEdge
```

## Description

Method; returns a [HalfEdge object](../HalfEdge_object/HalfEdge_summary.md).

## Example

The following example stores the half edges of the specified edge in the hEdge0 and hEdge1 variables:

```javascript
var shape = fl.getDocumentDOM().selection[0];
var edge = shape.edges[0];
var hEdge0 = edge.getHalfEdge(0);
var hEdge1 = edge.getHalfEdge(1);
```
