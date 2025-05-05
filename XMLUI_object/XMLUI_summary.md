# XMLUI summary

## Availability

Flash MX 2004.

## Description

Flash 8 supports custom dialog boxes written in a subset of the XML User Interface Language (XUL). An XML User Interface (XMLUI) dialog box can be used by several Flash features, such as commands and behaviors, to provide a user interface for features that you build using extensibility. The XMLUI object provides the ability to get and set properties of an XMLUI dialog box, and accept or cancel out of one. The XMLUI methods can be used in callbacks, such as *oncommand* handlers in buttons.
You can write a dialog.xml file and invoke it from the JavaScript API using the [Document.xmlPanel()](../Document_object/Document6198.md) method. To retrieve an object representing the current XMLUI dialog box, use [Flash.xmlui](../Flash_object/Flash81.md).

## Method summary

The following methods are available for the XMLUI object:

| **Method** | **Description** |
| --- | --- |
| [XMLUI.accept()](../XMLUI_object/XMLUI.md) | Closes the current XMLUI dialog box with an accept state. |
| [XMLUI.cancel()](../XMLUI_object/XMLUI1.md) | Closes the current XMLUI dialog box with a cancel state. |
| [XMLUI.get()](../XMLUI_object/XMLUI2.md) | Retrieves the value of the specified property of the current XMLUI dialog box. |
| [XMLUI.getControlItemElement()](../XMLUI_object/XMLUI3.md) | Returns the current control item for the specified control. |
| [XMLUI.getEnabled()](../XMLUI_object/XMLUI4.md) | Returns a Boolean value that specifies whether the control is enabled or disabled (dimmed). |
| [XMLUI.getVisible()](../XMLUI_object/XMLUI5.md) | Returns a Boolean value that specifies whether the control is visible or hidden. |
| [XMLUI.set()](../XMLUI_object/XMLUI6.md) | Modifies the value of the specified property of the current XMLUI dialog box. |
| [XMLUI.setControlItemElement()](../XMLUI_object/XMLUI7.md) | Sets the label and value for the current item. |
| [XMLUI.setControlItemElements()](../XMLUI_object/XMLUI8.md) | Sets the label, value pairs of the current item. |
| [XMLUI.setEnabled()](../XMLUI_object/XMLUI9.md) | Enables or disables (dims) a control. |
| [XMLUI.setVisible()](../XMLUI_object/XMLUI10.md) | Shows or hides a control. |
