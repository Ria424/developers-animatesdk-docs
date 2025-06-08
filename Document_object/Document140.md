# Document.mouseDblClk()

## Availability

Flash MX 2004.

## Usage

Document.mouseDblClk(position, bAltDown, bShiftDown, bShiftSelect)

## Parameters

### **position**

#### Type

```typescript
Point
```

#### Description

A pair of floating-point values that specify the *x* and *y* coordinates of the click in pixels.

### **bAltdown**

#### Type

```typescript
boolean
```

#### Description

A boolean value that records whether the Alt key is down at the time of the event: true for pressed; false

for not pressed.
### **bShiftDown**

#### Type

```typescript
boolean
```

#### Description

A boolean value that records whether the Shift key was down when the event occurred: true for pressed;

false for not pressed.
### **bShiftSelect**

#### Type

```typescript
boolean
```

#### Description

A boolean value that indicates the state of the application preference Shift select: true for on; false for off.

## Returns

Nothing.

## Description

Method; performs a double mouse click from the Selection tool.

## Example

The following example performs a double mouse click at the specified location:

```javascript
fl.getDocumentDOM().mouseDblClk({x: 392.9, y: 73}, false, false, true);
```

## See also

[Document.mouseClick()](../Document_object/Document130.md)
