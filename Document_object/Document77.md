# Document.getElementProperty()

## Availability

Flash MX 2004.

## Usage

Document.getElementProperty(propertyName)

## Parameters

### **propertyName**

#### Type

```typescript
string
```

#### Description

Specifies the name of the Element property for which to retrieve the value.

## Returns

The value of the specified property. Returns null if the property is an indeterminate state, as when multiple elements are selected with different property values. Returns undefined if the property is not a valid property of the selected element.

### Type

```typescript
integer | null | undefined
```

## Description

Method; Gets the specified Element property for the current selection. For a list of acceptable values, see the Property summary table for the [Element object](../Element_object/Element_summary.md).

## Example

The following example gets the name of the Element property for the current selection:

```javascript
// the instance name of the selected object.
var elementName = fl.getDocumentDOM().getElementProperty("name");
```

## See also

[Document.setElementProperty()](../Document_object/Document490.md)
