# Document.timelines

## Availability

Flash MX 2004.

## Description

Read-only property; `Timeline[]`; An array of [Timeline object](../Timeline_object/Timeline_summary.md)s.

## Example

The following example gets the array of current timelines in the active document and displays their names in the Output panel:

```javascript
var i = 0;
var curTimelines = fl.getDocumentDOM().timelines;
while (i < fl.getDocumentDOM().timelines.length) {
    alert(curTimelines[i].name);
    ++i;
}
```

## See also

- [Document.currentTimeline](../Document_object/Document39.md)
- [Document.getTimeline()](../Document_object/Document88.md)
