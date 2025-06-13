# Document.exportInstanceToPNGSequence()

## Availability

Flash CS6.

## Usage

Document.exportInstanceToPNGSequence(outputURI, startFrameNum, endFrameNum, matrix)

## Parameters

### **outputURI**

#### Type

```typescript
string
```

#### Description

The URI to export the PNG Sequence files to. This URI must reference a local file. Example: file:///c\|/tests/mytest.png.

### **startFrameNum**

#### Type

```typescript
number?
```

#### Description

Optional. An integer indicating the first frame to be exported. The default is 1.

### **endFrameNum**

#### Type

```typescript
number?
```

#### Description

Optional. An Integer indicating the last frame to be exported. The default is 99999.

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

Method; Exports a selected instance of a movie clip, graphic, or button symbol on the Stage to a series of PNG files on disk. If no startFrameNum or endFrameNum is given, the output includes all frames in the Timeline.

## Example

The following example exports the entire Timeline to a numbered PNG sequence starting with the file name "myTest.png":

```javascript
fl.getDocumentDOM().exportInstanceToPNGSequence("file:///c\|/tests/mytest.png");
```
