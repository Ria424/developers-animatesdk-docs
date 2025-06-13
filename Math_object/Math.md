# Math.concatMatrix()

## Availability

Flash MX 2004.

## Usage

Math.concatMatrix(mat1, mat2)

## Parameters

### **mat1**

#### Type

```typescript
Matrix
```

#### Description

The Matrix object to be concatenated (see [Matrix object](../Matrix_object/Matrix_summary.md)).

### **mat2**

#### Type

```typescript
Matrix
```

#### Description

The Matrix object to be concatenated (see [Matrix object](../Matrix_object/Matrix_summary.md)).

## Returns

A concatenated Matrix object.

### Type

```typescript
Matrix
```

## Description

Method; Performs a matrix concatenation and returns the result.

## Example

The following example stores the currently selected object in the elt variable, multiplies the object matrix by the view matrix, and stores that value in the mat variable:

```javascript
var elt = fl.getDocumentDOM().selection[0];
var mat = fl.Math.concatMatrix(elt.matrix , fl.getDocumentDOM().viewMatrix);
```
