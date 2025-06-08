# XMLUI.getControlItemElement()

## Availability

Flash 8.

## Usage

XMLUI.getControlItemElement(controlPropertyName)

## Parameters

### **controlPropertyName**

#### Type

```typescript
string
```

#### Description

Specifies the property whose control item element you want to retrieve.

## Returns

An object that represents the current control item for the control specified by **`controlPropertyName`**.

## Description

Method; Returns the label and value of the line selected in a ListBox or ComboBox control for the control specified by
**`controlPropertyName`**.

## Example

The following example returns the label and value of the currently selected line for the myListBox control:

```javascript
var elem = new Object();
elem = fl.xmlui.getControlItemElement("myListBox");
fl.trace("label = " + elem.label + " value = " + elem.value);
```

## See also

- [Flash.xmlui](../Flash_object/Flash81.md)
- [Document.xmlPanel()](../Document_object/Document6198.md)
- [XMLUI.get()](../XMLUI_object/XMLUI2.md)
- [XMLUI.setControlItemElement()](../XMLUI_object/XMLUI7.md)
- [XMLUI.setControlItemElements()](../XMLUI_object/XMLUI8.md)
