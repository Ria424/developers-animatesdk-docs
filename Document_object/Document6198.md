# Document.xmlPanel()

## Availability

Flash MX 2004.

## Usage

Document.xmlPanel(fileURI)

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the path to the XML file defining the controls in the panel. The full path is required.

## Returns

An object that has properties defined for all controls defined in the XML file. All properties are returned as strings. The returned object will have one predefined property named "dismiss" that will have the string value "accept" or "cancel".

### Type

```typescript
any | {dismiss: "accept" | "cancel"}
```

## Description

Method; Posts an XMLUI dialog box. See [Flash.xmlui](../Flash_object/Flash81.md).

## Example

The following example loads the Test.xml file and displays each property contained within it:

```javascript
var obj = fl.getDocumentDOM().xmlPanel(fl.configURI + "Commands/Test.xml"); 
for (var prop in obj) {
    fl.trace("property " + prop + " = " + obj[prop]);
}
```
