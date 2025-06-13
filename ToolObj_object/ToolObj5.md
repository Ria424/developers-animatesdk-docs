# ToolObj.setMenuString()

## Availability

Flash MX 2004.

## Usage

ToolObj.setMenuString(menuStr)

## Parameters

### **menuStr**

#### Type

```typescript
string
```

#### Description

The name that appears in the pop-up menu as the name for the tool.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Sets the string that appears in the pop-up menu as the name for the tool. This method is used only when you create extensible tools.

## Example

The following example specifies that the tool named theTool should display the name "PolyStar Tool" in its pop-up menu. This code is taken from the sample PolyStar.jsfl file (see ["Sample PolyStar tool"](../Introduction/Sample_implementations.md#sample-polyStar-tool)):

```javascript
theTool = fl.tools.activeTool;
theTool.setMenuString("PolyStar Tool");
```
