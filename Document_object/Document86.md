# Document.getTelemetryForSwf()

## Availability

Adobe Animate.

## Usage

Document.getTelemetryForSwf()

## Parameters

None.

## Returns

Returns true if the "Enable detailed telemetry" checkbox is selected; otherwise false.

### Type

```typescript
boolean
```

## Description

Method; Indicates whether if the "Enable detailed telemetry" checkbox is selected in the Publish Settings dialog.

## Example

```javascript
fl.trace("is detailed telemetry enabled for this doc: " + fl.getDocumentDOM().getTelemetryForSwf());
```
