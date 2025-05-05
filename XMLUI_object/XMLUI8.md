# XMLUI.setControlItemElements()

## Availability

Flash 8.

## Usage

XMLUI.setControlItemElements(controlID, elementItemArray)

## Parameters

**controlID** `string`; Specifies the ID attribute of the control you want to set.

**elementItemArray** `{label: string; value?: string;}[]` An array of JavaScript objects, where each object has a string property named *label* and an optional string property named value. If the value property does not exist, then it is created and assigned the same value as *label*.

## Returns

Nothing.

## Description

Method; Clears the values of the ListBox or ComboBox control specified by *controlID* and replaces the list or menu items with the label, value pairs specified by *elementItemArray*.

## Example

The following example sets the label and value of items in the control with the ID attribute myControlID to the label, value pairs specified:

```javascript
var nameArray = new Array("January", "February", "March");
var monthArray = new Array();
for (var i = 0; i < nameArray.length; i++) {
    elem = new Object();
    elem.label = nameArray[i];
    elem.value = i;
    monthArray[i] = elem;
}
fl.xmlui.setControlItemElements("myControlID", monthArray);
```

## See also

- [XMLUI.getControlItemElement()](../XMLUI_object/XMLUI3.md)
- [XMLUI.set()](../XMLUI_object/XMLUI6.md)
- [XMLUI.setControlItemElement()](../XMLUI_object/XMLUI7.md)
