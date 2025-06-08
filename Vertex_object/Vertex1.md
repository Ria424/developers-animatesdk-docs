# Vertex.setLocation()

## Availability

Flash MX 2004.

## Usage

Vertex.setLocation(x, y)

## Parameters

### **x**

#### Type

```typescript
number
```

#### Description

A floating-point value that specifies the *x* coordinate of where the vertex should be positioned, in pixels.

### **y**

#### Type

```typescript
number
```

#### Description

A floating-point value that specifies the *y* coordinate of where the vertex should be positioned, in pixels.

## Returns

Nothing.

## Description

Method; Sets the location of the vertex. You must call [Shape.beginEdit()](../Shape_object/Shape.md) before using this method.

## Example

The following example sets the vertex to the origin point:

```javascript
var shape = fl.getDocumentDOM().selection[0];
shape.beginEdit();
var hEdge = shape.edges[0].getHalfEdge(0);
var vertex = hEdge.getVertex();
var someHEdge = vertex.getHalfEdge();
var vertex = someHEdge.getVertex();
// Move the vertex to the origin.
vertex.setLocation(0.0, 0.0);
shape.endEdit();
```
