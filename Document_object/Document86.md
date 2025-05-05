# Document.getTelemetryForSwf()

## Availability

Adobe Animate.

## Usage

Document.getTelemetryForSwf()

## Parameters

None.

## Returns

`boolean`; Returns true if the "Enable detailed telemetry" checkbox is selected; otherwise false.

## Description

Method; Indicates whether if the "Enable detailed telemetry" checkbox is selected in the Publish Settings dialog.

## Example

```javascript
fl.trace("is detailed telemetry enabled for this doc: " + fl.getDocumentDOM().getTelemetryForSwf());
```
