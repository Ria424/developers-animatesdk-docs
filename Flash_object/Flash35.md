# Flash.getSwfPanel()

## Availability

Flash CS5.5 Professional.

## Usage

fl.getSwfPanel(panelName, [useLocalizedPanelName])

## Parameters

### **panelName**

#### Type

```typescript
string
```

#### Description

The localized panel name or the root filename of the panel's SWF file. Pass in false as the second parameter if using the latter.

### **useLocalizedPanelName**

#### Type

```typescript
boolean?
```

#### Description

Optional. Defaults to true. If false, the panelName parameter is assumed to be the English (unlocalized) name of the panel, which corresponds to the SWF filename without the file extension.

## Returns

SWFPanel object.

### Type

```typescript
SwfPanel
```

## Description

Method; returns the SWFPanel object based on the panel's localized name or its SWF filename (without the filename extension).

## Example

The following example displays the name of the panel referenced as ‘Project’ in the Output panel:

```javascript
fl.trace("name of panel is: " + fl.getSwfPanel("Project").name);
```
