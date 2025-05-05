# Timeline.getGuidelines()

## Availability

Flash CS4 Professional.

## Usage

Timeline.getGuidelines()

## Parameters

None.

## Returns

`string`; An XML string.

## Description

Method; Returns an XML string that represents the current positions of the horizontal and vertical guide lines for a timeline (View >Guides >Show Guides). To apply these guide lines to a timeline, use [Timeline.setGuidelines()](../Timeline_object/Timeline44.md).

## Example

Assuming that you have some guide lines on the first timeline, the following example displays them as an XML string in the Output panel:

```javascript
var currentTimeline = fl.getDocumentDOM().timelines[0];
fl.trace(currentTimeline.getGuidelines());
```
