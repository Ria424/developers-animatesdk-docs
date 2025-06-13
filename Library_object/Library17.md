# Library.setItemProperty()

## Availability

Flash MX 2004.

## Usage

Library.setItemProperty(property, value)

## Parameters

### **property**

#### Type

```typescript
string
```

#### Description

The name of the property to set. For a list of properties, see the Property summary table for the [Item object](../Item_object/Item_summary.md) and property summaries for its subclasses. To see which objects are subclasses of the Item object, see ["Summary of the DOM structure" on Given Page](../Introduction/JavaScript_API_objects.md).

### **value**

#### Type

```typescript
any
```

#### Description

The value to assign to the specified property.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Sets the property for all selected library items (ignoring folders).

## Example

The following example assigns the value button to the symbolType property for the selected library item or items. In this case, the item must be a [SymbolItem object](../SymbolItem_object/SymbolItem_summary.md); symbolType is a valid property for SymbolItem objects.

```javascript
fl.getDocumentDOM().library.setItemProperty("symbolType", "button");
```
