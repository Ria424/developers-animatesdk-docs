# OutputPanel.save()

## Availability

Flash MX 2004; *bUseSystemEncoding* parameter added in Flash 8.

## Usage

OutputPanel.save(fileURI [, bAppendToFile [ , bUseSystemEncoding] ] )

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the local file to contain the contents of the Output panel.

### **bAppendToFile**

#### Type

```typescript
boolean?
```

#### Description

An optional boolean. If true, appends the Output panel’s contents to the file; if false, overwrites the file. Default is false.

### **bUseSystemEncoding**

#### Type

```typescript
boolean?
```

#### Description

An optional boolean value. If true, it saves the Output panel text using the system encoding; if false, it saves the Output panel text using UTF-8 encoding, with Byte Order Mark characters at the beginning of the text. The default value is false.

## Returns

Nothing.

## Description

Method; Saves the contents of the Output panel to a local text file, either by overwriting the file or by appending to the file.
If *fileURI* is invalid or unspecified, an error is reported.
This method is useful for batch processing. For example, you can create a JSFL file that compiles several components. Any compile errors appear in the Output panel, and you can use this method to save the resulting errors to a text file, which can be automatically parsed by the build system in use.

## Example

The following example saves the Output panel’s contents to the batch.log file in the /tests
folder, overwriting the batch.log file if it already exists:

```javascript
fl.outputPanel.save("file:///c|/tests/batch.log");
```
