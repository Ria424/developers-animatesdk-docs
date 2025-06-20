# Document.addNewLine()

## Availability

Flash MX 2004.

## Usage

Document.addNewLine(startPoint, endpoint)

## Parameters

### **startpoint**

#### Type

```typescript
Point
```

#### Description

A pair of floating-point numbers that specify the *x* and *y* coordinates where the line starts.

### **endpoint**

#### Type

```typescript
Point
```

#### Description

A pair of floating-point numbers that specify the *x* and *y* coordinates where the line ends.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Adds a new path between two points. The method uses the document’s current stroke attributes and adds the path on the current frame and current layer. This method works in the same way as clicking on the line tool and drawing a line.

## Example

The following example adds a line between the specified starting point and ending point:

```javascript
fl.getDocumentDOM().addNewLine({x: 216.7, y: 122.3}, {x: 366.8, y: 165.8});
```
