## Document.deleteTaggedSwatchByName()

#### Availability

Animate 2020.

#### Usage

document.deleteTaggedSwatchByName(name:string)

#### Parameters

**name**:It is a string that indicates the name of the tagged swatch to delete.

#### Returns

Nothing.

#### Description

Method;delete tagged swatch with given name.

#### Example

The following example delete the tagged swatch of name "swatch1"

```javascript
fl.getDocumentDOM().deleteTaggedSwatchByName("swatch1");
```

#### See also

[Document.deleteTaggedSwatchAtIndex()](../Document_object/Document6065.md)
