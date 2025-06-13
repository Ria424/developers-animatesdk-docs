# Document.scaleSelection()

## Availability

Flash MX 2004.

## Usage

Document.scaleSelection(xScale, yScale [, whichCorner])

## Parameters

### **xScale**

#### Type

```typescript
number
```

#### Description

A floating-point value that specifies the amount of *x* by which to scale.

### **yScale**

#### Type

```typescript
number
```

#### Description

A floating-point value that specifies the amount of *y* by which to scale.

### **whichCorner**

#### Type

```typescript
"top left" | "top center" | "top right" | "center left" | "center" | "center right" | "bottom left" | "bottom center" | "bottom right"?
```

#### Description

The edge about which the transformation occurs. If omitted, scaling occurs about the transformation point. Acceptable values are: "bottom left", "bottom right", "top right", "top left", "top center", "right center", "bottom center", and "left center". This parameter is optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Scales the selection by a specified amount. This method is equivalent to using the Free Transform tool to scale the object.

## Example

The following example expands the width of the current selection to double the original width and shrinks the height to half:

```javascript
fl.getDocumentDOM().scaleSelection(2.0, 0.5);
```

The following example flips the selection vertically:

```javascript
fl.getDocumentDOM().scaleSelection(1, -1);
```

The following example flips the selection horizontally:

```javascript
fl.getDocumentDOM().scaleSelection(-1, 1);
```

The following example scales the selection vertically by 1.9 from the top center:

```javascript
fl.getDocumentDOM().scaleSelection(1, 1.90, "top center");
```
