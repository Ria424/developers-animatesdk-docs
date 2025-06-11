# PresetPanel.deleteItem()

## Availability

Flash CS4 Professional.

## Usage

PresetPanel.deleteItem([namePath])

## Parameters

### **namePath**

#### Type

```typescript
string?
```

#### Description

A string that specifies the path and name of the item to delete from the Motion Presets panel. This parameter is optional.

## Returns

`boolean`; A boolean value of true if the item or items are successfully deleted; false otherwise.

## Description

Method; Deletes the specified preset from the Motion Presets panel. If you don’t pass a value for *namePath*, any presets that are currently selected are deleted. You can’t delete items from the Default Presets folder.

***Note:** Items are deleted without requesting user confirmation, and there is no way to undo this action.*

## Example

The following code deletes a preset named aDribble from the Custom Presets folder:

```javascript
fl.presetPanel.deleteItem("Custom Presets/aDribble");
```

## See also

[PresetPanel.deleteFolder()](../PresetPanel_object/PresetPanel2.md)
