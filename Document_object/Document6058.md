# Document.addTaggedSwatch()

## Availability

Animate 2020.

## Usage

Document.addTaggedSwatch(swatch:object [,index:int [,palette:int ]])

## Parameters

### **swatch**

#### Type

```typescript
Swatch
```

#### Description

Swatch object to add.

### **index**

#### Type

```typescript
number?
```

#### Description

An optional integer that specifies the index where to add swatch.

### **palette**

#### Type

```typescript
number?
```

#### Description

An optional integer that specifies the index of the tagged swatch palette. Default value is 0.

## Returns

Nothing.

### Type

```typescript
void
```

## Description

Method; To add new tagged swatch with the given swatch object at the given index, index is optional,in case no index is given adds swatch to end of the tagged swatches.

## Example

In the following example,adding new tagged swatch,swatch1 to end of the tagged swatches.

```javascript
var document = fl.getDocumentDOM();
var swatch1 = new Object();
var fill = document.getCustomFill();
fill.color = "#FF00FF";
fill.style = "solid";
swatch1.fill = fill;
swatch1.name = "solid_swatch";
document.addTaggedSwatch(swatch1);
```

## See also

[Document.addTaggedSwatchWithColor()](../Document_object/Document6059.md)
