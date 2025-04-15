## Flash.documents

#### Availability

Flash MX 2004.

#### Usage

fl.documents

#### Description

Read-only property; `Document[]`; An array of [Document object](../Document_object/Document_summary.md)s that represent the documents (FLA files) that are currently open for editing.

#### Example

The following example stores an array of open documents in the docs variable:

```javascript
var docs = fl.documents;
```

The following example displays the names of currently open documents, in the Output panel:

```javascript
for (doc in fl.documents) {
    fl.trace(fl.documents[doc].name);
}
```
