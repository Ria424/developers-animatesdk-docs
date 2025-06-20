# PresetPanel.moveToFolder()

## Availability

Flash CS4 Professional.

## Usage

*presetPanel.moveToFolder(folderPath [, namePath] )*

## Parameters

### **folderPath**

#### Type

```typescript
string
```

#### Description

A string that specifies the path to the folder in the Motion Presets panel to which the item or items are moved.

### **namePath**

#### Type

```typescript
string?
```

#### Description

A string that specifies the path and name of the item to move. This parameter is optional.

## Returns

A boolean value of true if the items are successfully moved; false otherwise.

### Type

```typescript
boolean
```

## Description

Method; Moves the specified item to the specified folder.

If you pass an empty string ("") for **`folderPath`**, the items are moved to the Custom Presets folder. If you don’t pass a value for **`namePath`**, the currently selected items are moved.

You can’t move items to or from the Default Presets folder.

## Example

In the following example, the currently selected items are moved to the Custom Presets/Bouncing folder, and then the Fast Bounce preset is moved to the same folder:

```javascript
fl.presetPanel.moveToFolder("Custom Presets/Bouncing");
fl.presetPanel.moveToFolder("Custom Presets/Bouncing", "Custom Presets/Fast Bounce");
```
