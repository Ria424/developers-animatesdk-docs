# PresetPanel.expandFolder()

## Availability

Flash CS4 Professional.

## Usage

*presetPanel.expandFolder( [bExpand [, bRecurse [, folderPath] ] ] )*

## Parameters

### **bExpand**

#### Type

```typescript
boolean?
```

#### Description

A boolean value that specifies whether to expand the folder (*true*) or collapse it (*false*). This parameter is optional; the default value is true.

### **bRecurse**

#### Type

```typescript
boolean?
```

#### Description

A boolean value that specifies whether to expand or collapse the folder’s subfolders (*true*) or not *false*). This parameter is optional; the default value is *false*.

### **folderPath**

#### Type

```typescript
string?
```

#### Description

A string that specifies the path to the folder to expand or collapse. This parameter is optional.

## Returns

`boolean`; A boolean value of *true* if the folder or folders are successfully expanded or collapsed; *false* otherwise.

## Description

Method; Expands or collapses the currently selected folder or folders in the Motion Presets panel. To expand or collapse folders other than the folders that are currently selected, pass a value for *folderPath*.

## Example

The following example expands the Custom Presets folder but does not expand its subfolders:

```javascript
fl.presetPanel.expandFolder(true, false, "Custom Presets");
```

The following example expands the Custom Presets folder and all its subfolders:

```javascript
fl.presetPanel.expandFolder(true, true, "Custom Presets");
```
