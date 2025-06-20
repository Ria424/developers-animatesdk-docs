# Flash.fileExists()

## Availability

Flash MX 2004.

## Usage

fl.fileExists(fileURI)

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that contains the path to the file.

## Returns

True if the file exists on disk; false otherwise.

### Type

```typescript
boolean
```

## Description

Method; checks whether a file already exists on disk.

## Example

The following example displays true or false in the Output panel for each specified file, depending on whether the file exists.

```javascript
alert(fl.fileExists("file:///C|/example.fla"));
alert(fl.fileExists("file:///C|/example.jsfl"));
alert(fl.fileExists(""));
```
