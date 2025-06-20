# Flash.isFontInstalled()

## Availability

Flash CS4 Professional.

## Usage

fl.isFontInstalled(fontName)

## Parameters

### **fontName**

#### Type

```typescript
string
```

#### Description

A string that specifies the name of a device font.

## Returns

True if the specified font is installed; false otherwise.

### Type

```typescript
boolean
```

## Description

Method; determines whether a specified font is installed.

## Example

The following code displays "true" in the Output panel if the Times font is installed.

```javascript
fl.trace(fl.isFontInstalled("Times"));
```
