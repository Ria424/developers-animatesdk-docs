## PresetPanel.items

#### Availability

Flash CS4 Professional.

#### Usage

*presetPanel.items*

#### Description

Property; an array of presetItem objects in the Motion Presets panel (see [PresetItem object](../PresetItem_object/PresetItem_summary.md)). Each item in the array represents either a folder or a preset.

#### Example

The following code displays the full pathnames of the items in the Motion Presets panel:

```javascript
var itemArray = fl.presetPanel.items;
var length = itemArray.length
for (var x = 0; x < length; x++) {
    fl.trace(itemArray[x].path);
}
```

#### See also

[PresetPanel.getSelectedItems()](../PresetPanel_object/PresetPanel7.md)
