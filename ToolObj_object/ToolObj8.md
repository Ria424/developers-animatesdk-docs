# ToolObj.setToolName()

## Availability

Flash MX 2004.

## Usage

ToolObj.setToolName(name)

## Parameters

### **name**

#### Type

```typescript
string
```

#### Description

The name of the tool.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Assigns a name to the tool for the configuration of the Tools panel. This method is used only when you create extensible tools. The name is used only by the XML layout file that Flash reads to construct the Tools panel. The name does not appear in the Flash user interface.

## Example

The following example assigns the name polystar to the tool named theTool. This code is taken from the sample PolyStar.jsfl file (see["Sample PolyStar tool"](../Introduction/Sample_implementations.md#sample-polyStar-tool)):

```javascript
theTool = fl.tools.activeTool;
theTool.setToolName("polystar");
```
