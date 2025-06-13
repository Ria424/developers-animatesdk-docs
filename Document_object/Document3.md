# Document.addFilter()

## Availability

Flash 8.

## Usage

Document.addFilter(filterName)

## Parameters

### **filterName**

#### Type

```typescript
"adjustColorFilter" | "bevelFilter" | "blurFilter" | "dropShadowFilter" | "glowFilter" | "gradientBevelFilter" | "gradientGlowFilter"
```

#### Description

A string specifying the filter to be added to the Filters list and enabled for the selected objects. Acceptable values are "adjustColorFilter", "bevelFilter", "blurFilter", "dropShadowFilter", "glowFilter", "gradientBevelFilter", and "gradientGlowFilter".

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Applies a filter to the selected objects and places the filter at the end of the Filters list.

## Example

The following example applies a glow filter to the selected objects:

```javascript
fl.getDocumentDOM().addFilter("glowFilter");
```

## See also

- [Document.changeFilterOrder()](../Document_object/Document29.md)
- [Document.disableFilter()](../Document_object/Document47.md)
- [Document.enableFilter()](../Document_object/Document59.md)
- [Document.getFilters()](../Document_object/Document79.md)
- [Document.removeFilter()](../Document_object/Document270.md)
- [Document.setBlendMode()](../Document_object/Document460.md)
- [Document.setFilterProperty()](../Document_object/Document520.md)
