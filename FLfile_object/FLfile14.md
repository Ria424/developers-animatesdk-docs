# FLfile.uriToPlatformPath()

## Availability

Flash CS4 Professional.

## Usage

FLfile.uriToPlatformPath(fileURI)

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

Expressed as a file:/// URI, specifying the filename you want to convert.

## Returns

`string`; A string representing a platform-specific path.

## Description

Method; Converts a filename expressed as a file:/// URI to a platform-specific format.

## Example

The following example converts a file:/// URI to a platform-specific format:

```javascript
var dir = fl.configDirectory;
var URI = FLfile.platformPathToURI(dir);
fl.trace(URI == fl.configURI); // Displays "true"
```

## See also

[FLfile.platformPathToURI()](../FLfile_object/FLfile10.md)
