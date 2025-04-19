## ActionsPanel.getScriptAssistMode() - dropped

#### Availability

Flash CS3 Professional. *Dropped in Adobe Animate*.

#### Usage

ActionsPanel.getScriptAssistMode()

#### Parameters

None.

#### Returns

`boolean`; A boolean value that specifies whether Script Assist mode is enabled (true) or not (false).

#### Description

Method; Specifies whether Script Assist mode is enabled.

#### Example

The following example displays a message if Script Assist mode is not enabled.

```javascript
mAssist = fl.actionsPanel.getScriptAssistMode();
if (!mAssist) {
    alert("For more guidance when writing ActionScript code, try Script Assist mode");
}
```

#### See also

[ActionsPanel.setScriptAssistMode() - dropped](../ActionsPanel_object/ActionsPanel6.md)
