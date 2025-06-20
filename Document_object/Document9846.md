# Document.setTextRectangle()

## Availability

Flash MX 2004.

## Usage

document.setTextRectangle(boundingRectangle)

## Parameters

### **boundingRectangle**

#### Type

```typescript
RectangleBounds
```

#### Description

A rectangle that specifies the new size within which the text item should flow. For information on the format of *boundingRectangle*, see [Document.addNewRectangle()](../Document_object/Document10.md).

## Returns

true if the size of at least one text field is changed; false otherwise.

### Type

```typescript
boolean
```

## Description

Method; Changes the bounding rectangle for the selected text item to the specified size. This method causes the text to reflow inside the new rectangle; the text item is not scaled or transformed. The values passed in *boundingRectangle* are used as follows:

- If the text is horizontal and static, the method takes into account only the width value passed in *boundingRectangle*; the height is automatically computed to fit all the text.

- If the text is vertical (and therefore static), the method takes into account only the height value passed in

*boundingRectangle*; the width is automatically computed to fit all the text.

- If the text is dynamic or input, the method takes into account both the width and height values passed in *boundingRectangle*, and the resulting rectangle might be larger than needed to fit all the text. However, if the parameters specify a rectangle size that is too small to fit all the text, the method takes into account only the width value passed in *boundingRectangle* (the height is automatically computed to fit all the text).

## Example

The following example changes the size of the bounding text rectangle to the specified dimensions:

```javascript
fl.getDocumentDOM().setTextRectangle({left: 0, top: 0, right: 50, bottom: 200});
```
