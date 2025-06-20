# Document.addDataToDocument()

## Availability

Flash MX 2004.

## Usage

Document.addDataToDocument(name, type, data)

## Parameters

### **name**

#### Type

```typescript
string
```

#### Description

Specifies the name of the data to add.

### **type**

#### Type

```typescript
"byteArray" | "double" | "doubleArray" | "integer" | "integerArray" | "string"
```

#### Description

A string that defines the type of data to add. Acceptable values are "integer", "integerArray", "double", "doubleArray", "string", and "byteArray".

### **data**

#### Type

```typescript
number | number[] | string
```

#### Description

The value to add. Valid types depend on the *type* parameter.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Stores specified data with a document. Data is written to the FLA file and is available to JavaScript when the file reopens.

## Example

The following example adds an integer value of 12 to the current document:

```javascript
fl.getDocumentDOM().addDataToDocument("myData", "integer", 12);
```

The following example returns the value of the data named "myData" and displays the result in the Output panel:

```javascript
fl.trace(fl.getDocumentDOM().getDataFromDocument("myData"));
```

## See also

- [Document.getDataFromDocument()](../Document_object/Document76.md)
- [Document.removeDataFromDocument()](../Document_object/Document250.md)
