# Document.setStageViewAngle()

## Availability

Flash CS4 Professional.

## Usage

Document.setStageViewAngle(angle)

## Parameters

### **angle**

#### Type

```typescript
number
```

#### Description

A floating point value between 0.0 and 179.0.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Specifies the perspective angle for viewing 3D objects.

## Example

The following example sets the Stage perspective angle to 70 degrees:

```javascript
fl.getDocumentDOM().setStageViewAngle(70);
```
