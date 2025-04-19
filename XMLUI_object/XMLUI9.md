## XMLUI.setEnabled()

#### Availability

Flash 8.

#### Usage

XMLUI.setEnabled(controlID, enable)

#### Parameters

**controlID** `string`; Specifies the ID attribute of the control you want to enable or disable.

**enable** `boolean`; true if you want to enable the control, or false if you want to disable (dim) it.

#### Returns

Nothing.

#### Description

Method; Enables or disables (dims) a control.

#### Example

The following example dims the control with the ID attribute myControl:

```javascript
fl.xmlui.setEnabled("myControl", false);
```

#### See also

[XMLUI.getEnabled()](../XMLUI_object/XMLUI4.md)
