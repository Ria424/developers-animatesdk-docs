# Document.importPublishProfileString()

## Availability

Flash CS4 Professional.

## Usage

Document.importPublishProfileString(xmlString)

## Parameters

### **xmlString**

#### Type

```typescript
string
```

#### Description

A string that contains the XML data to be imported as the current profile.

## Returns

true if the string was successfully imported; false otherwise.

### Type

```typescript
boolean
```

## Description

Method: Imports an XML string that represents a publish profile and sets it as the current profile. To generate an XML string to import, use [Document.exportPublishProfileString()](../Document_object/Document66.md) before using this method.

## Example

In the following example, the default profile is exported as an XML string. The standard JavaScript replace command is used to modify the XML string. The string is then imported, and the default ActionScript 3 output setting is set to ActionScript 1.

```javascript
var profileXML = fl.getDocumentDOM().exportPublishProfileString("Default");
fl.trace(profileXML);

var newProfileXML = profileXML.replace("<ActionScriptVersion>3</ActionScriptVersion>", "<ActionScriptVersion>1</ActionScriptVersion>");
fl.getDocumentDOM().importPublishProfileString(newProfileXML);
```
