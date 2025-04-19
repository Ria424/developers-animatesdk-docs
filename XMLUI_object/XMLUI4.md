## XMLUI.getEnabled()

#### Availability

Flash 8.

#### Usage

XMLUI.getEnabled(controlID)

#### Parameters

**controlID** `string`; Specifies the ID attribute of the control whose status you want to retrieve.

#### Returns

`boolean`; A boolean value of *true* if the control is enabled; *false* otherwise.

#### Description

Method; Returns a boolean value that specifies whether the control is enabled or disabled (dimmed).

#### Example

The following example returns a value that indicates whether the control with the ID attribute myListBox is enabled:

```javascript
var isEnabled = fl.xmlui.getEnabled("myListBox");
fl.trace(isEnabled);
```

#### See also

- [Flash.xmlui](../Flash_object/Flash81.md)
- [Document.xmlPanel()](../Document_object/Document6198.md)
- [XMLUI.setEnabled()](../XMLUI_object/XMLUI9.md)
