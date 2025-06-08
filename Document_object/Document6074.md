# Document.exportSVG()

## Availability

Animate 2020.

## Usage

Document.exportSVG(fileURI, currentSettings, currentFrame);

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the output file path (without file extension)

### **currentSettings**

#### Type

```typescript
boolean
```

#### Description

Specifies whether to use the current SVG export settings (true) or to display the Export SVG dialog box (false)

### **currentFrame**

#### Type

```typescript
boolean
```

#### Description

Specifies whether to export only the current frame (true) or to export all frames, with each frame as a separate SVG file (false)

## Returns

Nothing.

## Description

Method; It generates SVG File.

## Example

The following example generates SVG File.

```javascript
fl.getDocumentDOM().exportSVG("file:///users/usename/Desktop/Canvas/hap.svg", true, true);
```
