# Document.traceBitmap()

## Availability

Flash MX 2004.

## Usage

Document.traceBitmap(threshold, minimumArea, curveFit, cornerThreshold)

## Parameters

### **threshold**

#### Type

```typescript
number
```

#### Description

An integer that controls the number of colors in your traced bitmap. Acceptable values are integers between 0 and 500.\

### **minimumArea**

#### Type

```typescript
number
```

#### Description

An integer that specifies the radius measured in pixels. Acceptable values are integers between 1 and 1000.

### **curveFit**

#### Type

```typescript
"pixels" | "very tight" | "tight" | "normal" | "smooth" | "very smooth"
```

#### Description

Specifies how smoothly outlines are drawn. Acceptable values are "pixels", "very tight", "tight", "normal", "smooth", and "very smooth".

### **cornerThreshold**

#### Type

```typescript
"many corners" | "normal" | "few corners"
```

#### Description

A string that is similar to *curveFit*, but it pertains to the corners of the bitmap image. Acceptable values are "many corners", "normal", and "few corners".

## Returns

Nothing.

## Description

Method; Performs a trace bitmap on the current selection. This method is equivalent to selecting Modify >Bitmap>Trace Bitmap.

## Example

The following example traces the selected bitmap, using the specified parameters:

```javascript
fl.getDocumentDOM().traceBitmap(0, 500, "normal", "normal");
```
