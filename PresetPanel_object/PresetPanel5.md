# PresetPanel.exportItem()

## Availability

Flash CS4 Professional.

## Usage

*presetPanel.exportItem(fileURI [, namePath] )*

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the path and optionally a filename for the exported file. See "Description," below, for more information.

### **namePath**

#### Type

```typescript
string?
```

#### Description

A string that specifies the path and name of the item to select from the Motion Presets panel. This parameter is optional.

## Returns

True if the preset was exported successfully; false otherwise.

### Type

```typescript
boolean
```

## Description

Method; Exports the currently selected or the specified preset to an XML file. Only presets can be exported; the method fails if you try to export a folder. This method also fails if you try to overwrite a file on disk.
If you don’t specify a filename as part of **`fileURI`** (that is, if the last character of **`fileURI`** is a slash (/)), the exported file is saved with the same name as the preset being exported. If you don’t specify a value for **`namePath`**, the currently selected preset is exported. See the example below.

## Example

The following example demonstrates what files are created when different parameters are passed to this method, and informs you if the specified file was successfully created. Before running this example, select the fly-in-left preset in the Default Presets folder and create the My Presets folder on disk.

```javascript
//Exports fly-in-left to C:\My Presets\fly-in-left.xml
fl.presetPanel.exportItem("file:///C|/My Presets/");
//Exports fly-in-left to C:\My Presets\myFavoritePreset.xml
fl.presetPanel.exportItem("file:///C|/My Presets/myFavoritePreset.xml");
// Exports the "pulse" preset to C:\My Presets\pulse.xml
fl.presetPanel.exportItem("file:///C|/My Presets/", "Default Presets/pulse");
// Exports the "pulse" preset to C:\My Presets\thePulsePreset.xml
fl.presetPanel.exportItem("file:///C|/My Presets/thePulsePreset.xml", "Default Presets/pulse");
```

## See also

[PresetPanel.importItem()](../PresetPanel_object/PresetPanel8.md)
