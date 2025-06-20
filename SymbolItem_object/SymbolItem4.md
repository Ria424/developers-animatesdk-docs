# SymbolItem.exportToPNGSequence()

## Availability

Flash Pro CS6.

## Usage

SymbolItem.exportToPNGSequence(outputURI [, startFrameNum ] [, endFrameNum ] [, matrix])

## Parameters

### **outputURI**

#### Type

```typescript
string
```

#### Description

The URI to export the PNG sequence files to. This URI must reference a local file. For example: file:///c|/tests/mytest.png.

### **startFrameNum**

#### Type

```typescript
number
```

#### Description

An integer indicating the first frame within the symbol to be exported. If this parameter is omitted, all frames are exported.

### **endFrameNum**

#### Type

```typescript
number
```

#### Description

An integer indicating the last frame within the symbol to be exported. If this parameter is omitted, all frames are exported.

### **matrix**

#### Type

```typescript
Matrix?
```

#### Description

Optional. A matrix to be appended to the exported PNG sequence.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Exports a movie clip, graphic, or button symbol to a sequence of PNG files on disk.

## Example

The following example exports the first symbol in the Library new sequence of numbered PNG files starting with the filename"myTest.png":

```javascript
fl.getDocumentDOM().library.items[0].exportToPNGSequence("file:///c|/tests/mytest.png");
```
