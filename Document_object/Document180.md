# Document.optimizeCurves()

## Availability

Flash MX 2004.

## Usage

Document.optimizeCurves(smoothing, bUseMultiplePasses)

## Parameters

### **smoothing**

#### Type

```typescript
number
```

#### Description

An integer in the range from 0 to 100, with 0 specifying no smoothing and 100 specifying maximum smoothing.

### **bUseMultiplePasses**

#### Type

```typescript
boolean
```

#### Description

A boolean value that, when set to true, indicates that the method should use multiple passes, which is slower but produces a better result. This parameter has the same effect as clicking the Use Multiple Passes button in the Optimize Curves dialog box.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Optimizes smoothing for the current selection, allowing multiple passes, if specified, for optimal smoothing. This method is equivalent to selecting `Modify > Shape > Optimize`.

## Example

The following example optimizes the curve of the current selection to 50º of smoothing with multiple passes:

```javascript
fl.getDocumentDOM().optimizeCurves(50, true);
```
