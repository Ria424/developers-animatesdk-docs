# Document.importPublishProfile()

## Availability

Flash MX 2004.

## Usage

Document.importPublishProfile(fileURI)

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the path of the XML file defining the profile to import.

## Returns

An integer that is the index of the imported profile in the profiles list. Returns -1 if the profile cannot be imported.

### Type

```typescript
integer
```

## Description

Method; Imports a profile from a file.

## Example

The following example imports the profile contained in the profile.xml file and displays its index in the profiles list:

```javascript
alert(fl.getDocumentDOM().importPublishProfile("file:///C\|/Documents and Settings/janeUser/Desktop/profile.xml"));
```
