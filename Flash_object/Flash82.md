# Flash.addToolInToolbar()

## Availability

Animate 2020

## Usage

fl.addToolInToolbar(toolName)

## Parameters

### **toolName**

#### Type

```typescript
"arrow"
| "bezierSelect"
| "freeXform"
| "fillXform"
| "lasso"
| "pen"
| "penplus"
| "penminus"
| "penmodify"
| "text"
| "line"
| "rect"
| "oval"
| "rectPrimitive"
| "ovalPrimitive"
| "polystar"
| "pencil"
| "brush"
| "inkBottle"
| "bucket"
| "eyeDropper"
| "eraser"
| "hand"
| "magnifier"
| "GPUBrush"
| "ThreeDRotate"
| "ThreeDXform"
| "lassoPoly"
| "magicWand"
| "paintBrush"
| "camera"
| "width"
| "stageRotation"
| "timeScrub"
| "puppet"
```

#### Description

A string that specifies the name of the tool to select. Refer [Flash.selectTool](../Flash_object/Flash68.md) description for the acceptable **`toolName`** values.

## Returns

`boolean`; Returns true if the specified tool was added successfully in the Tools Panel.

## Description

Method; Appends the specified tool in the Tools Panel from Toolbar Palette if it is not already present.
If you or a user creates custom tools, the names of those tools can also be passed as the *toolName* parameter.

## Example

The following example selects the Oval tool.

```javascript
var success = fl.addToolInToolbar("oval");
```
