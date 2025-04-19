## ActionsPanel.replaceSelectedText()

#### Availability

Flash CS3 Professional.

#### Usage

actionsPanel.replaceSelectedText(replacementText)

#### Parameters

**replacementText** `string`; A string that represents text to replace selected text in the Actions panel.

#### Returns

`boolean`; A boolean value of true if the Actions panel is found; false otherwise.

#### Description

Method; Replaces the currently selected text with the text specified in *replacementText*. If *replacementText* contains more characters than the selected text, any characters following the selected text now follow *replacementText*; that is, they are not overwritten.

#### Example

The following example replaces currently selected text in the Actions panel.

```javascript
if (fl.actionsPanel.hasSelection()) {
    fl.actionsPanel.replaceSelectedText("// © 2006 Adobe Inc.");
}
```

#### See also

- [ActionsPanel.getSelectedText()](../ActionsPanel_object/ActionsPanel2.md)
- [ActionsPanel.hasSelection()](../ActionsPanel_object/ActionsPanel4.md)
- [ActionsPanel.setSelection()](../ActionsPanel_object/ActionsPanel7.md)
- [ActionsPanel.setText()](../ActionsPanel_object/ActionsPanel8.md)
