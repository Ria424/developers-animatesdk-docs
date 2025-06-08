# Document.exportMedia()

## Availability

Adobe Animate2020.

## Usage

Document.exportMedia(fileURI, format, preset [,bTransparent [, bRunBatch [, sceneName [, startFrame [, endFrame]]]]]).

## Parameters

### **fileURI**

#### Type

```typescript
string
```

#### Description

A string, expressed as a file:/// URI, that specifies the output file path (without file extension).

### **format**

#### Type

```typescript
string
```

#### Description

Specifies the format of the file to be exported.

### **preset**

#### Type

```typescript
string
```

#### Description

Specifies the preset to be used.

### **bTransparent**

#### Type

```typescript
boolean?
```

#### Description

A optional boolean that specifies whether to ignore the stage colour. Default value is false.

### **bRunBatch**

#### Type

```typescript
boolean?
```

#### Description

A optional boolean that specifies whether to run AME batch automatically. Default value is true.

### **sceneName**

#### Type

```typescript
string?
```

#### Description

A optional string that specifies the name of the scene if only that specific scene should be exported. By default all scenes will be exported.

### **startFrame**

#### Type

```typescript
number?
```

#### Description

An optional integer, index of start frame in specific scene. Applicable only when a specific scene is exported. By default it will be either first frame of timeline or the start frame of the timeline loop range if defined.

### **endFrame**

#### Type

```typescript
number?
```

#### Description

An optional integer, index of end frame in specific scene. Applicable only when a specific scene is exported. By default it will be last frame of timeline or the end frame of the timeline loop range if defined.

## Returns

Nothing.

## Description

Method; Generates the required media from the document by making use of Adobe Media Encoder.

## Example

The following example generates the required media.

```javascript
dom.exportMedia("file:///C/Desktop/media", "H.264", "Default", true, false, "Scene 1", 20, 85);
```
