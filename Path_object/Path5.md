# Path.makeShape()

## Availability

Flash MX 2004.

## Usage

path.makeShape([bSupressFill [, bSupressStroke]])

## Parameters

### **bSuppressFill**

#### Type

```typescript
boolean?
```

#### Description

A boolean value that, if set to true, suppresses the fill that would be applied to the shape. The default value is false. This parameter is optional.

### **bSupressStroke**

#### Type

```typescript
boolean?
```

#### Description

A boolean value that, if set to true, suppresses the stroke that would be applied to the shape. The default value is false. This parameter is optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Creates a shape on the Stage by using the current stroke and fill settings. The path is cleared after the shape is created. This method has two optional parameters for suppressing the fill and stroke of the resulting shape object. If you omit these parameters or set them to false, the current values for fill and stroke are used.

## Example

The following example creates a shape with the current fill and no stroke:

```javascript
var myPath = fl.drawingLayer.newPath();
myPath.makeShape(false, true);
```
