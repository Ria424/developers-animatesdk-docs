# PresetItem.level

## Availability

Flash CS4 Professional.

## Description

Read-only property: an integer that specifies the level of the item in the folder structure of the Motion Presets panel. The Default Folder and Custom Presets folder are level 0.

## Example

The following example shows that the first item in the Motion Presets panel is level 0 and the second is level 1:

```javascript
var presetItemArray = fl.presetPanel.items;
fl.trace(presetItemArray[0].level);
fl.trace(presetItemArray[1].level);
```
