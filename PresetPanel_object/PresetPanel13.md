# PresetPanel.selectItem()

## Availability

Flash CS4 Professional.

## Usage

*presetPanel.selectItem(namePath [, bReplaceCurrentSelection [, bSelect] ])*

## Parameters

### **namePath**

#### Type

```typescript
string
```

#### Description

A string that specifies the path and name of the item to select from the Motion Presets panel.

### **bReplaceCurrentSelection**

#### Type

```typescript
boolean?
```

#### Description

A Boolean value that specifies whether the specified item replaces any current selection (*true*) or is added to the current selection (*false*). This parameter is optional; the default value is true.

### **bSelect**

#### Type

```typescript
boolean?
```

#### Description

A Boolean value that specifies whether to select the item (*true*) or deselect the item (*false*). This parameter is optional; the default value is true. If you pass false for *bSelect*, the value of *bReplaceCurrentSelection* is ignored.

## Returns

A boolean value of true if the item was successfully selected or deselected; false otherwise.

### Type

```typescript
boolean
```

## Description

Method; Selects or deselects an item in the Motion Presets panel, optionally replacing any items currently selected.

## Example

The following code adds the fly-in-blur-right preset to the currently selected presets (if any) in the Motion Presets panel:

```javascript
fl.presetPanel.selectItem("Default Presets/fly-in-blur-right", false);
```
