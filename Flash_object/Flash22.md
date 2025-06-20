# Flash.exportPublishProfileString()

## Availability

Flash Professional CS5.

## Usage

fl.exportPublishProfileString( ucfURI [, profileName] )

## Parameters

### **ucfURI**

#### Type

```typescript
string
```

#### Description

A string that specifies the file Uniform Resource Identifier (URI) from which to export the publish settings.

### **profileName**

#### Type

```typescript
string?
```

#### Description

A string that specifies the profile name to export. This parameter is optional.

## Returns

### Type

```typescript
string
```

## Description

Returns a specific document’s publishing profile without having to open the file. The publish profile can also be specified, but this is optional.

## Example

The following example reads the publishing profile string:

```javascript
var ppXML = "";
var ucfURI = fl.browseForFileURL("open", "select a FLA");
if (ucfURI && ucfURI.length > 0)
    ppXML = fl.exportPublishProfileString(ucfURI);
fl.trace(ppXML);
```
