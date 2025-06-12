# PresetPanel.addNewItem()

## Availability

Flash CS4 Professional.

## Usage

fl.presetPanel.addNewItem([namePath]);

## Parameters

### **namePath**

#### Type

```typescript
string?
```

#### Description

A string that specifies the path and name of the item to add to the Motion Presets panel. This parameter is optional.

## Returns

A boolean value of true if the item was successfully added; *false* otherwise.

### Type

```typescript
boolean
```

## Description

Method; If a single motion tween is currently selected on the Stage, adds that motion to the Motion Presets panel in the specified folder with the specified name. The path specified in *namePath* must exist in the panel.

If a preset matching *namePath* exists, this method has no effect, and returns false.
If you don’t pass a value for *namePath*, the item is added to the Custom Presets folder with the name "Custom preset

*n*," where *n* is incremented each time you add an item in this fashion.

## Example

Assuming that a single motion tween is selected on the Stage, the following code adds a preset named Bouncing Ball to the Custom Presets folder:

```javascript
fl.presetPanel.addNewItem("Custom Presets/Bouncing Ball");
```

## See also

[PresetPanel.newFolder()](../PresetPanel_object/PresetPanel11.md)
