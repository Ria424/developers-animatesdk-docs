# Flash.xmlPanelFromString()

## Availability

Adobe Animate.

## Usage

fl.xmlPanelFromString(xmlString)

## Parameters

### **xmlString**

#### Type

```typescript
string
```

#### Description

A string containing XML that defines a dialog.

## Returns

### Type

```typescript
XMLUI
```

## Description

Method; Launches the XML To UI dialog from an XML-format string.

## Example

The following example calls the xmlPanelFromString method:

```javascript
var str = "<?xml version=\"1.0\"?><dialog id=\"scale-dialog\" title=\"Scale Selection\"buttons=\"accept, cancel\"><grid><columns><column/><column/></columns><rows><row align=\"center\"><label value=\"Scale y:\" control=\"yScale\"/><textbox id=\"yScale\"/></row></rows></grid></dialog>";
var theDialog = fl.xmlPanelFromString(str);
```
