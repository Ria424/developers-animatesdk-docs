# Document.addNewOval()

## Availability

Flash MX 2004.

## Usage

Document.addNewOval(boundingRectangle [, bSuppressFill [, bSuppressStroke ]])

## Parameters

### **boundingRectangle**

#### Type

```typescript
RectangleBounds
```

#### Description

Specifies the bounds of the oval to be added. For information on the format of *boundingRectangle*, see [Document.addNewRectangle()](../Document_object/Document10.md).

### **bSuppressFill**

#### Type

```typescript
boolean
```

#### Description

A boolean value that, if set to true, causes the method to create the shape without a fill. The default value is false. This parameter is optional.

### **bSuppressStroke**

#### Type

```typescript
boolean
```

#### Description

A boolean value that, if set to true, causes the method to create the shape without a stroke. The default value is false. This parameter is optional.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Adds a new Oval object in the specified bounding rectangle. This method performs the same operation as the Oval tool. The method uses the document’s current default stroke and fill attributes and adds the oval on the current frame and layer. If both *bSuppressFill* and *bSuppressStroke* are set to true, the method has no effect.

## Example

The following example adds a new oval within the specified coordinates; it is 164 pixels in width and 178 pixels in height:

```javascript
fl.getDocumentDOM().addNewOval({left: 72,top: 50,right: 236,bottom: 228});
```

The following example draws the oval without a fill:

```javascript
fl.getDocumentDOM().addNewOval({left: 72,top: 50,right: 236,bottom: 228}, true); 
```

The following example draws the oval without a stroke:

```javascript
fl.getDocumentDOM().addNewOval({left: 72,top: 50,right: 236,bottom: 228}, false, true);
```

## See also

[Document.addNewPrimitiveOval()](../Document_object/Document7.md)
