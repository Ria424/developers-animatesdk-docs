# Document.exportPublishProfileString()

## Availability

Flash CS4 Professional.

## Usage

Document.exportPublishProfileString( [profileName] )

## Parameters

### **profileName**

#### Type

```typescript
string?
```

#### Description

Specifies the name of the profile to export to an XML string. This parameter is optional.

## Returns

An XML string.

### Type

```typescript
string
```

## Description

Method; `string`; Returns a string that specifies, in XML format, the specified profile. If you don’t pass a value for *profileName*, the current profile is exported.

## Example

The following example stores an XML string that represents the current profile in a variable named profileXML and then displays it in the Output panel:

```javascript
var profileXML = fl.getDocumentDOM().exportPublishProfileString(); 
fl.trace(profileXML);
```

## See also

- [Document.exportPublishProfile()](../Document_object/Document65.md)
- [Document.importPublishProfileString()](../Document_object/Document95.md)
