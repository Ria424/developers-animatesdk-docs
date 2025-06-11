# PresetPanel.findItemIndex()

## Availability

Flash CS4 Professional.

## Usage

PresetPanel.findItemIndex([presetName])

## Parameters

### **presetName**

#### Type

```typescript
string?
```

#### Description

A string that specifies the name of the preset for which the index value is returned. This parameter is optional.

## Returns

`number`; An integer that represents the index of the specified preset in the presetPanel.items array. If you don’t pass a value for **`presetName`**, the index of the currently specified preset is returned. This method returns -1 in the following situations:

- You don’t pass a value for **`presetName`** and no preset is selected.

- You don’t pass a value for **`presetName`** and multiple presets are selected.

- You pass a value for **`presetName`** that doesn’t correspond to an item in the panel.

## Description

Method; Returns an integer that represents the index location of an item in the Motion Presets panel.

## Example

The following code displays the index value and full pathname of the currently selected preset:

```javascript
// Select one preset in the Motions Preset panel before running this code
var selectedPreset = fl.presetPanel.findItemIndex();
fl.trace(selectedPreset);
fl.trace(fl.presetPanel.items[selectedPreset].path);
```
