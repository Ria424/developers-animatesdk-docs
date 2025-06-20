# PresetPanel.importItem()

## Availability

Flash CS4 Professional.

## Usage

*presetPanel.importItem(fileURI [,namePath ])*

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the XML file to be imported as a preset in the Motion Presets panel.

### **namePath**

#### Type

```typescript
string?
```

#### Description

A string that specifies in which folder to place the imported file and what to name it. This parameter is optional.

## Returns

A boolean value of true if the file is successfully imported; false otherwise.

### Type

```typescript
boolean
```

## Description

Method; Adds a preset to the Motion Presets panel from a specified XML file. The path specified in **`namePath`** must exist in the panel.
To create XML files that can be imported, use [PresetPanel.exportItem()](../PresetPanel_object/PresetPanel5.md).
If you don’t pass a value for **`namePath`**, the imported preset is placed in the Custom Presets folder and given the same name as the imported file (without the XML extension).

## Example

The following example imports a preset into the Custom Presets/Pulse folder, and names it fastPulse.

```javascript
fl.presetPanel.importItem("file:///C|/My Presets/thePulsePreset.xml", "Custom Presets/Pulse/fastPulse");
```

## See also

[PresetPanel.exportItem()](../PresetPanel_object/PresetPanel5.md)
