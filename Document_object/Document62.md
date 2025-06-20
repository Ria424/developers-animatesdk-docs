# Document.exportInstanceToLibrary()

## Availability

Flash CS6.

## Usage

Document.exportInstanceToLibrary(frameNumber, bitmapName)

## Parameters

### **frameNumber**

#### Type

```typescript
number
```

#### Description

Integer indicating the frame to be exported.

### **bitmapName**

#### Type

```typescript
string
```

#### Description

A string representing the name of the bitmap to be added to the Library.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Exports a selected instance of a movie clip, graphic, or button symbol on the Stage to a bitmap in Library.

## Example

The following example exports the selected item on frame 1 to the library and assigns the new bitmap the name "myTestBitmap":

```javascript
fl.getDocumentDOM().exportInstanceToLibrary(1, "myTestBitmap");
```
