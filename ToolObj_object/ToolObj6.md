# ToolObj.setOptionsFile()

## Availability

Flash MX 2004.

## Usage

ToolObj.setOptionsFile(xmlFile)

## Parameters

### **xmlFile**

#### Type

```typescript
string
```

#### Description

The name of the XML file that has the description of the tool’s options. The XML file must be placed in the same folder as the JSFL file.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Associates an XML file with the tool. The file specifies the options to appear in a modal panel that is invoked by an Options button in the Property inspector. You would usually use this method in the configureTool() function inside your JSFL file. See [ConfigureTool()](../Top-Level_Functions_and_Methods/configureTool.md).

For example, the PolyStar.xml file specifies three options associated with the Polygon tool:

```xml
<properties>
    <property name="Style"
        variable="style"
        list="polygon,star"
        defaultValue="0"
        type="Strings" />

    <property name="Number of Sides"
        variable="nsides"
        min="3"
        max="32"
        defaultValue="5"
        type="Number" />

    <property name="Star point size"
        variable="pointParam"
        min="0"
        max="1"
        defaultValue=".5"
        type="Double" />
</properties>
```

## Example

The following example specifies that the file named PolyStar.xml is associated with the currently active tool. This code is taken from the sample PolyStar.jsfl file (see ["Sample PolyStar tool"](../Introduction/Sample_implementations.md#sample-polyStar-tool)):

```javascript
theTool = fl.tools.activeTool;
theTool.setOptionsFile("PolyStar.xml");
```
