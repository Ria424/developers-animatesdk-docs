# ActionsPanel.setText()

## Availability

Flash CS3 Professional.

## Usage

setText(replacementText)

## Parameters

### **replacementText**

#### Type

```typescript
string
```

#### Description

A string that represents text to place in the Actions panel.

## Returns

A boolean value of true if the specified text was placed in the Actions panel; false otherwise.

### Type

```typescript
boolean
```

## Description

Method; Clears any text in the Actions panel and then adds the text specified in *replacementText*.

## Example

The following example replaces any text currently in the Actions panel with the specified text.

```javascript
fl.actionsPanel.setText("// Deleted this code - no longer needed");
```

## See also

- [ActionsPanel.getText()](../ActionsPanel_object/ActionsPanel3.md)
- [ActionsPanel.replaceSelectedText()](../ActionsPanel_object/ActionsPanel5.md)
