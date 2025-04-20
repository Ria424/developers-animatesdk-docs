## Document.deleteTaggedSwatchAtIndex()

#### Availability

Animate 2020.

#### Usage

Document.deleteTaggedSwatchAtIndex(index:int [,palette:int ])

#### Parameters

**index** `integer`; Speifies the index of the tagged swatch to delete.

**palette** `integer?0`; An optional integer that speifies the index of the tagged swatch palette, default value is 0.

#### Returns

Nothing.

#### Description

Method; Delete tagged swatch with given index.

#### Example

The following example delete the tagged swatch at index 0.

```javascript
fl.getDocumentDOM().deleteTaggedSwatchAtIndex(0, 4);
```

#### See also

[Document.deleteTaggedSwatchByName()](../Document_object/Document6066.md)
