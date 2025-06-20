# Flash.selectElement()

## Availability

Flash CS3 Professional.

## Usage

fl.selectElement(elementObject, editMode)

## Parameters

### **elementObject**

#### Type

```typescript
Element
```

#### Description

The [Element object](../Element_object/Element_summary.md) you want to select.

### **editMode**

#### Type

```typescript
boolean
```

#### Description

A boolean value that specifies whether you want to edit the element (true) or want only to select it (false).

## Returns

A boolean value of true if the element was successfully selected; false otherwise.

### Type

```typescript
boolean
```

## Description

Method; enables selection or editing of an element. Generally, you will use this method on objects returned by
[Flash.findObjectInDocByName()](../Flash_object/Flash27.md) or [Flash.findObjectInDocByType()](../Flash_object/Flash28.md).

## Example

The following example selects an element named "second text field" if one is found in the document:

```javascript
var nameToSearchFor = "second text field";
var doc = fl.getDocumentDOM();
// Start by viewing Scene 1 (index value of 0).
document.editScene(0);
// Search for element by name.
var results = fl.findObjectInDocByName(nameToSearchFor, doc);
if (results.length > 0) {
    // Select the first element found.
    // Pass false, so the symbolInstance you are searching for is selected.
    // If you pass true, the symbol instance will switch to edit mode.
    fl.selectElement(results[0], false);
    alert("success, found " + results.length + " objects")
}
else {
    alert('failed, no objects with name "' + nameToSearchFor + '" found');
}
```

## See also

[Flash.findObjectInDocByName()](../Flash_object/Flash27.md), [Flash.findObjectInDocByType()](../Flash_object/Flash28.md)
