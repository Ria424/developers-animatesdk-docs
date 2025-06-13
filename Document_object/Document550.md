# Document.setInstanceBrightness()

## Availability

Flash MX 2004.

## Usage

Document.setInstanceBrightness(brightness)

## Parameters

### **brightness**

#### Type

```typescript
number
```

#### Description

An integer that specifies brightness as a value from -100 (black) to 100 (white).

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Sets the brightness for the instance.

## Example

The following example sets the brightness for the instance to a value of 50:

```javascript
fl.getDocumentDOM().setInstanceBrightness(50);
```
