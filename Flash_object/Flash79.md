# Flash.xmlPanel()

## Availability

Adobe Animate.

## Usage

fl.xmlPanel(xmlURI)

## Parameters

### **xmlURI**

#### Type

```typescript
string
```

#### Description

A URI specifying the XML file that defines the controls in the panel. You must specify the full path name.

## Returns

The object returned contains properties for all controls defined in the XML file. All properties are returned as strings. The returned object will have one predefined property named "dismiss," which will have a string value that is either "accept" or "cancel".

### Type

```typescript
XMLUI
```

## Description

Method; Launches the XML To UI dialog from a URI that points to an XML-format file.

## Example

The following example calls the xmlPanel method:

```javascript
var obj = fl.xmlPanel(fl.configURI + "Commands/Test.xml");
for (var prop in obj) {
    fl.trace("property " + prop + " = " + obj[prop]);
}
```
