# DrawingLayer.moveTo()

## Availability

Flash MX 2004.

## Usage

DrawingLayer.moveTo(x, y)

## Parameters

### **x**

#### Type

```typescript
number
```

#### Description

A floating-point value that specifies the *x* coordinate of the position at which to start drawing.

### **y**

#### Type

```typescript
number
```

#### Description

A floating-point value that specifies the *y* coordinate of the position at which to start drawing.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Sets the current drawing position. You typically use this method only when creating extensible tools.

## Example

The following example sets the current drawing position at the point (10,15):

```javascript
fl.drawingLayer.moveTo(10, 15);
```
