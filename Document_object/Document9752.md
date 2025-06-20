# Document.setStroke()

## Availability

Flash MX 2004.

## Usage

Document.setStroke(color, size, strokeType)

## Parameters

### **color**

#### Type

```typescript
number | string
```

#### Description

The color of the stroke, in one of the following formats:

- A string in the format "#RRGGBB" or "#RRGGBBAA"

- A hexadecimal number in the format 0xRRGGBB

- An integer that represents the decimal equivalent of a hexadecimal number

### **size**

#### Type

```typescript
number
```

#### Description

A floating-point value that specifies the new stroke size for the selection.

### **strokeType**

#### Type

```typescript
"hairline" | "solid" | "dashed" | "dotted" | "ragged" | "stipple" | "hatched"
```

#### Description

A string that specifies the new type of stroke for the selection. Acceptable values are "hairline", "solid", "dashed", "dotted", "ragged", "stipple", and "hatched".

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Sets the color, width, and style of the selected stroke. For information on changing the stroke in the Tools panel and Property inspector, see [Document.setCustomStroke()](../Document_object/Document480.md).

## Example

The following example sets the color of the stroke to red, the size to 3.25, and the type to dashed:

```javascript
fl.getDocumentDOM().setStroke("#ff0000", 3.25, "dashed");
```
