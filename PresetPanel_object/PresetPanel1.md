# PresetPanel.applyPreset()

## Availability

Flash CS4 Professional.

## Usage

PresetPanel.applyPreset([presetPath])

## Parameters

### **presetPath**

#### Type

```typescript
string?
```

#### Description

A string that specifies the full path and name of the preset to be applied, as it appears in the Motion Presets panel. This parameter is optional; if you don’t pass a value, the currently selected preset is applied.

## Returns

A boolean value of true if the preset is successfully applied, *false* otherwise.

### Type

```typescript
boolean
```

## Description

Method; Applies the specified or currently selected preset to the currently selected item on the Stage. The item must be a motion tween, a symbol, or an item that can be converted to a symbol. If the item is a motion tween, its current motion is replaced with the selected preset without requesting user confirmation.
This method fails in the following situations:

- The path you specify as *presetPath* doesn’t exist.

- You don’t pass a value for *presetPath* and no preset is selected.

- You don’t pass a value for *presetPath* and multiple presets are selected.

- The selected item on the Stage is not a symbol and can’t be converted to a symbol.

## Example

The following example applies the aDribble preset to the currently selected item on the Stage:

```javascript
var result = fl.presetPanel.applyPreset("Custom Presets/Bounces/aDribble");
fl.trace(result);
```
