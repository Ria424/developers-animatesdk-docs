# Flash.findObjectInDocByName()

## Availability

Flash CS3 Professional.

## Usage

fl.findObjectInDocByName(instanceName, document)

## Parameters

### **instanceName**

#### Type

```typescript
string
```

#### Description

A string that specifies the instance name of an item in the specified document.

### **document**

#### Type

```typescript
Document
```

#### Description

The [Document object](../Document_object/Document_summary.md) in which to search for the specified item.

## Returns

An array of generic objects. Use the .obj property of each item in the array to get the object. The object has the following properties: keyframe, layer, timeline, and parent. You can use these properties to access the hierarchy of the object. For more information on these properties and how to access them, see [Flash.findObjectInDocByType()](../Flash_object/Flash28.md).

You can also access methods and properties for the layer and timeline values; they are equivalent to the [Layer object](../Layer_object/Layer_summary.md) and the [Timeline object](../Timeline_object/Timeline_summary.md), respectively.

### Type

```typescript
{obj: Element; keyframe: number; layer: Layer; timeline: Timeline; parent: SymbolInstance;}[]
```

## Description

Method; exposes elements in a document with instance names that match the specified text.

***Note:** In some cases, this method works only when run as a command from within a FLA file, not when you are currently viewing or editing the JSFL file.*

## Example

The following example searches the current document for elements named "instance01" .

```javascript
var nameToSearchFor = "instance01";
var doc = fl.getDocumentDOM();
var results = fl.findObjectInDocByName(nameToSearchFor, doc);
if (results.length > 0) {
    alert("success, found " + results.length + " objects");
} else {
    alert("failed, no objects named " + nameToSearchFor + " found");
}
```

## See also

[Flash.findObjectInDocByType()](../Flash_object/Flash28.md)
