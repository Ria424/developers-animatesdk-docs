# ToolObj.setPI()

## Availability

Flash MX 2004.

## Usage

ToolObj.setPI(pi)

## Parameters

### **pi**

#### Type

```typescript
string
```

#### Description

A string that specifies the Property inspector to invoke for this tool.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Specifies which Property inspector should be used when the tool is activated. This method is used only when you create extensible tools. Acceptable values are "shape" (the default), "text", and "movie".

## Example

The following example specifies that the shape Property inspector should be used when the tool is activated. This code is taken from the sample PolyStar.jsfl file (see ["Sample PolyStar tool"](../Introduction/Sample_implementations.md#sample-polyStar-tool)):

```javascript
theTool = fl.tools.activeTool;
theTool.setPI("shape");
```
