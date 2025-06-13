# Document.setTaggedSwatchByName()

## Availability

Animate 2020.

## Usage

Document.setTaggedSwatchByName(oldSwatchName:name, newSwatch:object).

## Parameters

### **oldSwatchName**

#### Type

```typescript
string
```

#### Description

A string that indicates the name of the tagged swatch to update.

### **newSwatch**

#### Type

```typescript
Swatch
```

#### Description

New swatch Object.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; Replace the tagged swatch with the given name to the given new swatch object.

## Example

The following example replace the tagged swatch with the given name "Oldswatch" to the given new swatch object swatch1.

```javascript
var document = fl.getDocumentDOM();
var swatch1 = new Object();
var fill = document.getCustomFill();
fill.color = "#FF00FF";
fill.style = "solid";
swatch1.fill = fill;
swatch1.name = "solid_swatch";
document.setTaggedSwatchByName("Oldswatch", swatch1);
```

## See also

[Document.setTaggedSwatchAtIndex()](../Document_object/Document6066.md)
