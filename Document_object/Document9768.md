# Document.setStrokeColor()

## Availability

Flash MX 2004.

## Usage

Document.setStrokeColor(color)

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

## Returns

Nothing.

## Description

Method; Changes the stroke color of the selection to the specified color. For information on changing the stroke in the Tools panel and Property inspector, see [Document.setCustomStroke()](../Document_object/Document480.md).

## Example

The three statements in the following example set the stroke color using each of the different formats for specifying color:

```javascript
fl.getDocumentDOM().setStrokeColor("#cc00cc");
fl.getDocumentDOM().setStrokeColor(0xcc00cc);
fl.getDocumentDOM().setStrokeColor(120000);
```
