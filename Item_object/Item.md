# Item.addData()

## Availability

Flash MX 2004.

## Usage

Item.addData(name, type, data)

## Parameters

### **name**

#### Type

```typescript
string
```

#### Description

Specifies the name of the data.

### **type**

#### Type

```typescript
"byteArray" | "double" | "doubleArray" | "integer" | "integerArray" | "string"
```

#### Description

Specifies the type of data. Valid types are "integer", "integerArray", "double", "doubleArray", "string", and "byteArray".

### **data**

#### Type

```typescript
number | number[] | string
```

#### Description

The data to add to the specified library item. The type of data depends on the value of the type parameter. For example, if type is "integer", the value of data must be an integer, and so on.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Adds specified data to a library item.

## Example

The following example adds data named myData with an integer value of 12 to the first item in the library:

```javascript
fl.getDocumentDOM().library.items[0].addData("myData", "integer", 12);
```
