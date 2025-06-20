# Document.convertToSymbol()

## Availability

Flash MX 2004.

## Usage

Document.convertToSymbol(type, name, registrationPoint)

## Parameters

### **type**

#### Type

```typescript
"button" | "graphic" | "movie clip"
```

#### Description

A string that specifies the type of symbol to create. Acceptable values are "movie clip", "button", and "graphic".

### **name**

#### Type

```typescript
string
```

#### Description

A string that specifies the name for the new symbol, which must be unique. You can submit an empty string to have this method create a unique symbol name for you.

### **registrationPoint**

#### Type

```typescript
"top left" | "top center" | "top right" | "center left" | "center" | "center right" | "bottom left" | "bottom center" | "bottom right"
```

#### Description

Specifies the point that represents the 0, 0 location for the symbol. Acceptable values are: "top left", "top center", "top right", "center left", "center", "center right", "bottom left", "bottom center", and "bottom right".

## Returns

An object for the newly created symbol, or null if it cannot create the symbol.

### Type

```typescript
SymbolItem
```

## Description

Method; Converts the selected Stage item(s) to a new symbol. For information on defining linkage and shared asset properties for a symbol, see [Item object](../Item_object/item_summary.md).

## Example

The following examples create a movie clip symbol with a specified name, a button symbol with a specified name, and a movie clip symbol with a default name:

```javascript
var newMc = fl.getDocumentDOM().convertToSymbol("movie clip", "mcSymbolName", "top left");
var newButton = fl.getDocumentDOM().convertToSymbol("button", "btnSymbolName", "bottom right");
var newClipWithDefaultName = fl.getDocumentDOM().convertToSymbol("movie clip", "", "top left");
```
