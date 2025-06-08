# Document.setTransformationPoint()

## Availability

Flash MX 2004.

## Usage

Document.setTransformationPoint(transformationPoint)

## Parameters

### **transformationPoint**

#### Type

```typescript
Point
```

#### Description

A point (for example, {x: 10, y: 20}, where x and y are floating-point numbers) that specifies values for the transformation point of each of the following elements:


- Shapes: *transformationPoint* is set relative to the document (0, 0 is the upper left corner of the Stage).

- Symbols: *transformationPoint* is set relative to the symbol’s registration point (0, 0 is located at the registration point).

- Text: *transformationPoint* is set relative to the text field (0, 0 is the upper left corner of the text field).

- Bitmaps/videos: *transformationPoint* is set relative to the bitmap/video (0, 0 is the upper left corner of the bitmap or video).

- Drawing objects, primitive ovals and rectangles, and groups: *transformationPoint* is set relative to the document (0, 0 is the upper left corner of the Stage). To set *transformationPoint* relative to the center point of the object, primitive, or group, use [Element.setTransformationPoint()](../Element_object/Element19.md).

## Returns

Nothing.

## Description

Method; Sets the position of the current selection’s transformation point.

## Example

The following example sets the transformation point of the current selection to 100, 200:

```javascript
fl.getDocumentDOM().setTransformationPoint({x: 100, y: 200});
```

## See also

[Document.getTransformationPoint()](../Document_object/Document89.md), [Element.setTransformationPoint()](../Element_object/Element19.md)
