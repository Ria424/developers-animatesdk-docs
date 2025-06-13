# DrawingLayer.lineTo()

## Availability

Flash MX 2004.

## Usage

DrawingLayer.lineTo(x, y)

## Parameters

### **x**

#### Type

```typescript
number
```

#### Description

A floating-point value that is the *x* coordinate of the end point of the line to draw.

### **y**

#### Type

```typescript
number
```

#### Description

A floating-point value that is the *y* coordinate of the end point of the line to draw.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Draws a line from the current drawing position to the point (*x, y*). You typically use this method only when creating extensible tools.

## Example

The following example draws a line from the current drawing position to the point (20, 30):

```javascript
fl.drawingLayer.lineTo(20, 30);
```
