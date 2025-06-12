# ActionsPanel.hasSelection()

## Availability

Flash CS3 Professional.

## Returns

A boolean value that specifies whether any text is selected in the Actions panel (true) or not (false).

### Type

```typescript
boolean
```

## Description

Method; Specifies whether any text is currently selected in the Actions panel.

## Example

The following example displays text that is currently selected in the Actions panel. If no text is selected, it displays all the text in the Actions panel.

```javascript
var apText;
if (fl.actionsPanel.hasSelection()) {
    apText = fl.actionsPanel.getSelectedText();
} else {
    apText = fl.actionsPanel.getText();
}
fl.trace(apText);
```

## See also

- [ActionsPanel.getSelectedText()](../ActionsPanel_object/ActionsPanel2.md)
- [ActionsPanel.getText()](../ActionsPanel_object/ActionsPanel3.md)
- [ActionsPanel.replaceSelectedText()](../ActionsPanel_object/ActionsPanel5.md)
- [ActionsPanel.setSelection()](../ActionsPanel_object/ActionsPanel7.md)
