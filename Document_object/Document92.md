## Document.id

#### Availability

Flash CS3 Professional.

#### Usage

document.id

#### Description

Read-only property; a unique integer (assigned automatically) that identifies a document during a Flash session. Use this property in conjunction with [Flash.findDocumentDOM()](../Flash_object/Flash25.md) to specify a particular document for an action.

#### Example

The following example displays the document ID for the current document:

```javascript
fl.trace("Current doc's internal ID is: " + fl.getDocumentDOM().id);
```

#### See also

[Flash.findDocumentDOM()](../Flash_object/Flash25.md).
