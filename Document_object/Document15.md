# Document.arrange()

## Availability

Flash MX 2004.

## Usage

Document.arrange(arrangeMode)

## Parameters

### **arrangeMode**

#### Type

```typescript
"back" | "backward" | "forward" | "front"
```

#### Description

Specifies the direction in which to move the selection. Acceptable values are "back", "backward", "forward", and "front". It provides the same capabilities as these options provide on the `Modify > Arrange` menu.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Arranges the selection on the Stage. This method applies only to non-shape objects.

## Example

The following example moves the current selection to the front:

```javascript
fl.getDocumentDOM().arrange("front");
```
