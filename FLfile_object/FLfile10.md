# FLfile.platformPathToURI()

## Availability

Flash CS4 Professional.

## Usage

FLfile.platformPathToURI(fileName)

## Parameters

### **fileName**

#### Type

```typescript
string
```

#### Description

Expressed in a platform-specific format, specifying the filename you want to convert.

## Returns

A string expressed as a file:/// URI.

### Type

```typescript
string
```

## Description

Method; Converts a filename in a platform-specific format to a file:/// URI.

## Example

The following example converts a filename from a platform-specific format to a file:/// URI, which is passed to `OutputPanel.save()`:

```javascript
var myFilename = "C:\\outputPanel.txt";
var myURI = FLfile.platformPathToURI(myFilename);
fl.outputPanel.save(myURI);
```

## See also

[FLfile.uriToPlatformPath()](../FLfile_object/FLfile14.md)
