# ActionsPanel.setScriptAssistMode() - dropped

## Availability

Flash CS3 Professional. *Dropped in Adobe Animate*.

## Usage

setScriptAssistMode(bScriptAssist)

## Parameters

### **bScriptAssist**

#### Type

```typescript
boolean
```

#### Description

A boolean value that specifies whether to enable or disable Script Assist mode.

## Returns

A boolean value that specifies whether Script Assist mode was enabled or disabled successfully.

### Type

```typescript
boolean
```

## Description

Method; Enables or disables Script Assist mode.

## Example

The following example toggles the state of Script Assist mode.

```javascript
fl.trace(fl.actionsPanel.getScriptAssistMode());
if (fl.actionsPanel.getScriptAssistMode()){
    fl.actionsPanel.setScriptAssistMode(false);
} else {
    fl.actionsPanel.setScriptAssistMode(true);
}
fl.trace(fl.actionsPanel.getScriptAssistMode());
```

## See also

[ActionsPanel.getScriptAssistMode() - dropped](../ActionsPanel_object/ActionsPanel1.md)
