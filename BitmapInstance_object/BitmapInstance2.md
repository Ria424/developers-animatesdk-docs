# BitmapInstance.setBits()

## Availability

Flash MX 2004.

## Usage

setBits(bitmap)

## Parameters

### **bitmap**

#### Type

```typescript
{
    height: number;
    width: number;
    depth: number;
    bits: number;
    cTab: number;
}
```

#### Description

An object that contains height, width, depth, bits, and cTab properties. The height, width, and depth propertiesare integers. The bits property is a byte array. The cTab property is required only for bitmaps with a bit depth of 8 or less and is a string that represents a color value in the form "\#RRGGBB".

***Note:** The byte array is meaningful only when referenced by an external library. You typically use it only when creating an extensible tool or effect.*

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Sets the bits of an existing bitmap element. This lets you create bitmap effects by getting the bits out of the bitmap, manipulating them, and then returning the bitmap to Animate.

## Example

The following code tests whether the current selection is a bitmap and then sets the height of the bitmap to 150 pixels:

```javascript
var isBitmap = fl.getDocumentDOM().selection[0].instanceType;
if (isBitmap == "bitmap") {
    var bits = fl.getDocumentDOM().selection[0].getBits();
    bits.height = 150;
    fl.getDocumentDOM().selection[0].setBits(bits);
} 
```

## See also

[BitmapInstance.getBits()](../BitmapInstance_object/BitmapInstance.md)
