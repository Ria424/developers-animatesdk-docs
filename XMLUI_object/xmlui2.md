## XMLUI.get()

#### Availability

Flash MX 2004.

#### Usage

*xmlui.get(controlPropertyName)*

#### Parameters

**controlPropertyName** A string that specifies the name of the XMLUI property whose value you want to retrieve.

#### Returns

A string that represents the value of the specified property. In cases where you might expect a Boolean value of *true
or false*, it returns the string *"true" or "false".*

#### Description

Method; retrieves the value of the specified property of the current XMLUI dialog box.

#### Example

The following example returns the value of a property named URL:

```javascript
fl.xmlui.get("URL");
```

#### See also

[fl.xmlui](../flash_object_(fl)/fl81.md), [Document.xmlPanel()](../Document_object/Document6198.md), [XMLUI.getControlItemElement()](../XMLUI_object/XMLUI3.md), [XMLUI.set()](../XMLUI_object/XMLUI6.md)
