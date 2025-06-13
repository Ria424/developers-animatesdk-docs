# Document.setFilters()

## Availability

Flash 8.

## Usage

Document.setFilters(filterArray)

## Parameters

### **filterArray**

#### Type

```typescript
Filter[]
```

#### Description

The array of filters currently specified.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Applies filters to the selected objects. Use this method after calling document.getFilters() and making any desired changes to the filters.

## Example

The following example gets the filters on the selected object and sets the blurX property for all Blur filters to 50:

```javascript
var myFilters = fl.getDocumentDOM().getFilters();
for (var i = 0; i < myFilters.length; i++) {
     if (myFilters[i].name == "blurFilter") {
          myFilters[i].blurX = 50;
     }
}
fl.getDocumentDOM().setFilters(myFilters);
```

## See also

- [Document.addFilter()](../Document_object/Document3.md)
- [Document.getFilters()](../Document_object/Document79.md)
- [Document.setFilterProperty()](../Document_object/Document520.md)
- [Filter object](../Filter_object/Filter_summary.md)
