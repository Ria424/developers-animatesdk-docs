# Flash.selectTool()

## Availability

Flash CS3 Professional.

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

A string that specifies the name of the tool to select. See "Description" below for information on acceptable values for this parameter.

## Returns

### Type

```typescript
void
```

## Description

Method; Selects the specified tool in the Tools panel. The acceptable values for **`toolName`** are "arrow", "bezierSelect", "freeXform", "fillXform", "lasso", "pen", "penplus", "penminus", "penmodify", "text", "line", "rect", "oval", "rectPrimitive", "ovalPrimitive", "polystar", "pencil", "brush", "inkBottle", "bucket", "eyeDropper", "eraser", "hand", "magnifier", "GPUBrush", "ThreeDRotate", "ThreeDXform", "lassoPoly", "magicWand", "paintBrush", "camera", "width", "stageRotation", "timeScrub" and "puppet".
If you or a user creates custom tools, the names of those tools can also be passed as the *toolName* parameter.

## Example

The following example selects the Pen tool.

```javascript
fl.selectTool("pen");
```

## See also

[Tools object](../Tools_object/Tools_summary.md), [ToolObj object](../ToolObj_object/ToolObj_summary.md)
