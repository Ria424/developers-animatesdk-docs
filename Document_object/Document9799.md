# Document.setStrokeSize()

## Availability

Flash MX 2004.

## Usage

Document.setStrokeSize(size)

## Parameters

### **size**

#### Type

```typescript
number
```

#### Description

A floating-point value from 0.25 to 250that specifies the stroke size. The method ignores precision greater than two decimal places.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Changes the stroke size of the selection to the specified size. For information on changing the stroke in the Tools panel and Property inspector, see [Document.setCustomStroke()](../Document_object/Document480.md).

## Example

The following example changes the stroke size for the selection to 5:

```javascript
fl.getDocumentDOM().setStrokeSize(5);
```
