# CompilerErrors.save()

## Availability

Flash CS3 Professional.

## Usage

CompilerErrors.save(fileURI \[, bAppendToFile \[, bUseSystemEncoding\]\])

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the filename for the saved file. If *fileURI* already exists, and you haven’t specified a value of true for *bAppendToFile*, *fileURI* is overwritten without warning.

### **bAppendToFile**

#### Type

```typescript
boolean?
```

#### Description

An optional boolean value that specifies whether the contents of the Compiler Errors panel should be appended to *fileURI* (true) or not (false). The default value is false.

### **bUseSystemEncoding**

#### Type

```typescript
boolean?
```

#### Description

An optional boolean value that specifies whether to save the Compiler Errors panel text using the system encoding. If this value is false (the default), the Compiler Errors panel text is saved using UTF-8 encoding, with Byte Order Mark characters at the beginning of the text. The default value is false.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Saves the contents of the Compiler Errors panel to a local text file.

## Example

The following example saves the contents of the Compiler Errors panel to a file named errors.log in the C:\tests folder:

```javascript
fl.compilerErrors.save("file:///c|/tests/errors.log");
```

## See also

[CompilerErrors.clear()](../CompilerErrors_object/CompilerErrors.md)
