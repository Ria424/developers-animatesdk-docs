## Document.deleteTaggedSwatchAtIndex()

#### Availability

Animate 2020.

#### Usage

document.deleteTaggedSwatchAtIndex(index:int [,palette:int ])

#### Parameters

**index** : It is an integer that speifies the index of the tagged swatch to delete.
**palette** : It is an integer that speifies the index of the tagged swatch palette,default value is 0.It is optional.  

#### Returns

Nothing.

#### Description

Method;delete tagged swatch with given index.

#### Example

The following example delete the tagged swatch at index 0.

```javascript
fl.getDocumentDOM().deleteTaggedSwatchAtIndex(0, 4);
```

#### See also

[Document.deleteTaggedSwatchByName()](../Document_object/Document6066.md)
