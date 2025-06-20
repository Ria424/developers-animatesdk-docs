# Frame.setSoundEnvelopeLimits()

## Availability

Adobe Animate.

## Usage

Frame.setSoundEnvelopeLimits(limits)

## Parameters

### **limits**

#### Type

```typescript
{start: number; end: number;}
```

#### Description

`{start: number; end: number;}`; A structure that contains start and end fields that signify the limits for a custom sound envelope.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Sets the sound envelope limits of any frame with a sound file.

## Example

The following example illustrates the use of setSoundEnvelopeLimits:

```javascript
var limits;
limits.start = 2000;
limits.end = 15000;
fl.getDocumentDOM().getTimeline().layers[0].frames[0].setSoundEnvelopeLimits(limits);
```

## See also

[Frame.getSoundEnvelopeLimits()](../Frame_object/Frame9.md)
