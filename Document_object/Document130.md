# Document.mouseClick()

## Availability

Flash MX 2004.

## Usage

Document.mouseClick(position, bToggleSel, bShiftSel)

## Parameters

### **position**

#### Type

```typescript
Point
```

#### Description

A pair of floating-point values that specify the *x* and *y* coordinates of the click in pixels.

### **bToggleSel**

#### Type

```typescript
boolean
```

#### Description

The state of the Shift key: true for pressed; false for not pressed.

### **bShiftSel**

#### Type

```typescript
boolean
```

#### Description

The state of the application preference Shift select: true for on; false for off.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Performs a mouse click from the Selection tool.

## Example

The following example performs a mouse click at the specified location:

```javascript
fl.getDocumentDOM().mouseClick({x: 300, y: 200}, false, false);
```

## See also

[Document.mouseDblClk()](../Document_object/Document140.md)
