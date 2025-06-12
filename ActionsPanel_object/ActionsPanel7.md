# ActionsPanel.setSelection()

## Availability

Flash CS3 Professional.

## Usage

setSelection(startIndex, numberOfChars)

## Parameters

### **startIndex**

#### Type

```typescript
number
```

#### Description

A zero-based integer that specifies the first character to be selected.

### **numberOfChars**

#### Type

```typescript
number
```

#### Description

An integer that specifies how many characters to select.

## Returns

A boolean value that specifies whether the requested characters can be selected (true) or not (false).

### Type

```typescript
boolean
```

## Description

Method; Selects a specified set of characters in the Actions panel.

## Example

The following example replaces the characters "2006" in the Actions panel with the specified text.

```javascript
// Type the following as the first line in the Actions panel
// 2006 - Addresses user request 40196

// Type the following in the JSFL file
fl.actionsPanel.setSelection(3, 4);
fl.actionsPanel.replaceSelectedText("// Last updated: 2007");
```

## See also

- [ActionsPanel.getSelectedText()](../ActionsPanel_object/ActionsPanel2.md)
- [ActionsPanel.hasSelection()](../ActionsPanel_object/ActionsPanel4.md)
- [ActionsPanel.replaceSelectedText()](../ActionsPanel_object/ActionsPanel5.md)
