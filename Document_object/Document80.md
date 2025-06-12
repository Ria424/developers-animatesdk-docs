# Document.getMetadata()

## Availability

Flash 8.

## Usage

Document.getMetadata()

## Parameters

None.

## Returns

A string containing the XML metadata associated with the document or an empty string if there is no metadata.

### Type

```typescript
string
```

## Description

Method; Returns a string containing the XML metadata associated with the document, or an empty string if there is no metadata.

## Example

The following example displays XML metadata from the current document in the Output panel:

```javascript
fl.trace("XML Metadata is :" + fl.getDocumentDOM().getMetadata());
```

## See also

[Document.setMetadata()](../Document_object/Document570.md)
