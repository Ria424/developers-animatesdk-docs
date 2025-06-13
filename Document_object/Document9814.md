# Document.setStrokeStyle()

## Availability

Flash MX 2004.

## Usage

Document.setStrokeStyle(strokeType)

## Parameters

### **strokeType**

#### Type

```typescript
"hairline" | "solid" | "dashed" | "dotted" | "ragged" | "stipple" | "hatched"
```

#### Description

The stroke style for the current selection. Acceptable values are "hairline", "solid", "dashed", "dotted", "ragged", "stipple", and "hatched".

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Changes the stroke style of the selection to the specified style. For information on changing the stroke in the Tools panel and Property inspector, see [Document.setCustomStroke()](../Document_object/Document480.md).

## Example

The following example changes the stroke style for the selection to "dashed":

```javascript
fl.getDocumentDOM().setStrokeStyle("dashed");
```
