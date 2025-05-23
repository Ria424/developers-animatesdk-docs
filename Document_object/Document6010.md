# Document.traceBitmap()

## Availability

Flash MX 2004.

## Usage

Document.traceBitmap(threshold, minimumArea, curveFit, cornerThreshold)

## Parameters

**threshold** `integer`; An integer that controls the number of colors in your traced bitmap. Acceptable values are integers between 0 and 500.\

**minimumArea** `integer`; An integer that specifies the radius measured in pixels. Acceptable values are integers between 1 and 1000.

**curveFit** `"pixels" | "very tight" | "tight" | "normal" | "smooth" | "very smooth"`; Specifies how smoothly outlines are drawn. Acceptable values are "pixels", "very tight", "tight", "normal", "smooth", and "very smooth".

**cornerThreshold** `"many corners" | "normal" | "few corners"`; A string that is similar to *curveFit*, but it pertains to the corners of the bitmap image. Acceptable values are "many corners", "normal", and "few corners".

## Returns

Nothing.

## Description

Method; Performs a trace bitmap on the current selection. This method is equivalent to selecting Modify >Bitmap>Trace Bitmap.

## Example

The following example traces the selected bitmap, using the specified parameters:

```javascript
fl.getDocumentDOM().traceBitmap(0, 500, "normal", "normal");
```
