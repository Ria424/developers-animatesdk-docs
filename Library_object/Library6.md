# Library.getItemProperty()

## Availability

Flash MX 2004.

## Usage

Library.getItemProperty(property)

## Parameters

### **property**

#### Type

```typescript
string
```

#### Description

For a list of values that you can use as a *property* parameter, see the Property summary table for the [Item object](../Item_object/Item_summary.md), along with property summaries for its subclasses.

## Returns

`string`; A string value for the property.

## Description

Method; Gets the property for the selected item.

## Example

The following example shows a dialog box that contains the Linkage Identifier value for the symbol when referencing it using ActionScript or for run-time sharing:

```javascript
alert(fl.getDocumentDOM().library.getItemProperty("linkageIdentifier"));
```
