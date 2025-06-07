# Document.setFilterProperty()

## Availability

Flash 8

## Parameters

### **property**

#### Type

```typescript
"angle"
| "bevelType"
| "blurX"
| "blurY"
| "color"
| "distance"
| "knockout"
| "inner"
| "quality"
| "shadowColor"
| "strength"
```

#### Description

The property to be set.

### **filterIndex**

#### Type

```typescript
number
```

#### Description

An integer specifying the zero-based index of the filter in the Filters list.

### **value**

#### Type

```typescript
number | string
```

#### Description

A number or string specifying the value to be set for the specified filter property. Acceptable values depend on the property and the filter being set.

## Returns

### Type

```typescript
void
```

## Description

Sets a specified filter property for the currently selected objects (assuming that the object supports the specified filter).

## Example

The following example sets the quality property to 2 for the second filter (index value of 1) in the Filters list of the selected objects and then sets the shadowColor property of the first filter in the Filters list on the selected objects:

```javascript
var doc = fl.getDocumentDOM();
doc.setFilterProperty("quality", 1, 2);
doc.setFilterProperty("shadowColor", 0, "#FF00FF");
```

## See also

- [Document.addFilter()](../Document_object/Document3.md)
- [Document.getFilters()](../Document_object/Document79.md)
- [Document.setBlendMode()](../Document_object/Document460.md)
- [Document.setFilters()](../Document_object/Document530.md)
- [Filter object](../Filter_object/Filter_summary.md)
