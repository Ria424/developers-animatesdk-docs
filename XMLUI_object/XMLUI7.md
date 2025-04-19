## XMLUI.setControlItemElement()

#### Availability

Flash 8.

#### Usage

XMLUI.setControlItemElement(controlPropertyName, elementItem)

#### Parameters

**controlPropertyName** `string`; Specifies the control item element to set.

**elementItem** A JavaScript object with a string property named label and an optional string property named *value*. If the *value* property does not exist, then it is created and assigned the same value as label.

#### Returns

Nothing.

#### Description

Method; Sets the label and value of the currently selected line in the ListBox or ComboBox control specified by
*controlPropertyName*.

#### Example

The following example sets the label and value for the current item of the control property named PhoneNumber:

```javascript
var elem = new Object();
elem.label = "Fax";
elem.value = "707-555-5555";
fl.xmlui.setControlItemElement("PhoneNumber", elem);
```

#### See also

- [Flash.xmlui](../Flash_object/Flash81.md)
- [Document.xmlPanel()](../Document_object/Document6198.md)
- [XMLUI.getControlItemElement()](../XMLUI_object/XMLUI3.md)
- [XMLUI.set()](../XMLUI_object/XMLUI6.md)
- [XMLUI.setControlItemElements()](../XMLUI_object/XMLUI8.md)
