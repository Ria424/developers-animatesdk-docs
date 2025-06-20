# Document.setInstanceTint()

## Availability

Flash MX 2004.

## Usage

Document.setInstanceTint( color, strength )

## Parameters

### **color**

#### Type

```typescript
number | string
```

#### Description

The color of the tint, in one of the following formats:

- A string in the format "#RRGGBB" or "#RRGGBBAA"

- A hexadecimal number in the format 0xRRGGBB

- An integer that represents the decimal equivalent of a hexadecimal number

### **strength**

#### Type

```typescript
number
```

#### Description

An integer between 0 and 100 that specifies the opacity of the tint.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Sets the tint for the instance.

## Example

The following example sets the tint for the selected instance to red with an opacity value of 50:

```javascript
fl.getDocumentDOM().setInstanceTint(0xff0000, 50);
```
