# Shape summary

**Inheritance** [Element object](../Element_object/Element_summary.md) > Shape object

## Availability

Flash MX 2004.

## Description

The Shape object is a subclass of the [Element object](../Element_object/Element_summary.md). The Shape object provides more precise control than the drawing APIs when manipulating or creating geometry on the Stage. This control is necessary so that scripts can create useful effects and other drawing commands.

All Shape methods and properties that change a shape or any of its subordinate parts must be placed between [Shape.beginEdit()](../Shape_object/Shape.md) and [Shape.endEdit()](../Shape_object/Shape4.md) calls to function correctly.

## Method summary

In addition to the Element object methods, you can use the following methods with the Shape object:

| **Method** | **Description** |
| --- | --- |
| [Shape.getCubicSegmentPoints()](../Shape_object/Shape5.md) | Returns an array of points that define a cubic curve. |
| [Shape.beginEdit()](../Shape_object/Shape.md) | Defines the start of an edit session. |
| [Shape.deleteEdge()](../Shape_object/Shape2.md) | Deletes the specified edge. |
| [Shape.endEdit()](../Shape_object/Shape4.md) | Defines the end of an edit session for the shape. |

## Property summary

In addition to the Element object properties, the following properties are available for the Shape object:

| **Property** | **Description** |
| --- | --- |
| [Shape.contours](../Shape_object/Shape1.md) | Read-only; an array of Contour objects for the shape (see [Contour object](../Contour_object/Contour_summary.md)). |
| [Shape.edges](../Shape_object/Shape3.md) | Read-only; an array of Edge objects (see [Edge object](../Edge_object/Edge_summary.md)). |
| [Shape.isDrawingObject](../Shape_object/Shape6.md) | Read-only; if true, the shape is a drawing object. |
| [Shape.isFloating](../Shape_object/Shape7.md) | Read-only; if true, the shape is floating above the parent frame's (or group's) shape. |
| [Shape.isGroup](../Shape_object/Shape8.md) | Read-only; if true, the shape is a group. |
| [Shape.isOvalObject](../Shape_object/Shape9.md) | Read-only; if true, the shape is a primitive Oval object (was created using the Oval tool). |
| [Shape.isRectangleObject](../Shape_object/Shape10.md) | Read-only; if true, the shape is a primitive Rectangle object (was created using the Rectangle tool). |
| [Shape.members](../Shape_object/Shape11.md) | An array of objects in the currently selected group. |
| [Shape.numCubicSegments](../Shape_object/Shape12.md) | Read-only; the number of cubic segments in the shape. |
| [Shape.vertices](../Shape_object/Shape13.md) | Read-only; an array of Vertex objects (see [Vertex object](../Vertex_object/Vertex_summary.md)). |
