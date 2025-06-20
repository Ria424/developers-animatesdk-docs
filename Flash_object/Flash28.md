# Flash.findObjectInDocByType()

## Availability

Flash CS3 Professional.

## Usage

fl.findObjectInDocByType(elementType, document)

## Parameters

### **elementType**

#### Type

```typescript
"shape" | "text" | "tlfText" | "instance" | "shapeObj"
```

#### Description

A string that represents the type of element to search for.

### **document**

#### Type

```typescript
Document
```

#### Description

The [Document object](../Document_object/Document_summary.md) in which to search for the specified item.

## Returns

An array of generic objects. Use the .obj property of each item in the array to get the element object. Each object has the following properties: keyframe, layer, timeline, and parent. You can use these properties to access the hierarchy of the object.

You can also access methods and properties for the layer and timeline values; they are equivalent to the [Layer object](../Layer_object/Layer_summary.md) and the [Timeline object](../Timeline_object/Timeline_summary.md), respectively.

The second and third examples in the Examples section show how to access these properties.

### Type

```typescript
{obj: Element; keyframe: number; layer: Layer; timeline: Timeline; parent: SymbolInstance;}[]
```

## Description

Method; exposes elements of a specified element type in a document.

***Note:** In some cases, this method works only when run as a command from within a FLA file, not when you are currently viewing or editing the JSFL file.*

## Example

The following example searches the current document for text fields and then changes their contents:

```javascript
var doc = fl.getDocumentDOM();
var typeToSearchFor = "text";
var results = fl.findObjectInDocByType(typeToSearchFor, doc);
if (results.length > 0) {
    for (var i = 0; i < results.length; i++) {
        results[i].obj.setTextString("new text");
    }
    alert("success, found " + results.length + " objects");
} else {
    alert("failed, no objects of type " + typeToSearchFor + " found");
}
```

The following example shows how to access the special properties of the object returned by this method:

```javascript
var doc = fl.getDocumentDOM();
var resultsArray = findObjectInDocByType("text", doc);
if (resultsArray.length > 0) {
    var firstItem = resultsArray[0];
    // firstItem.obj- This is the element object that was found.
    // You can access the following properties of this object:
    // firstItem.keyframe- The keyframe that the element is on.
    // firstItem.layer- The layer that the keyframe is on.
    // firstItem.timeline- The timeline that the layer is on.
    // firstItem.parent- The parent of the timeline. For example,
    // the timeline might be in a symbol instance.
}
```

The following example shows how to back up the DOM to find the name of a layer on which a text field was found, using the resultArray.obj object:

```javascript
var doc = fl.getDocumentDOM();
var typeToSearchFor = "text";
var resultsArray = fl.findObjectInDocByType(typeToSearchFor, doc);
if (resultsArray.length > 0) {
    for (var i = 0; i < resultsArray.length; i++) {
        resultsArray[i].obj.setTextString("new text");
        var firstItem = resultsArray[0];
        firstItemObj = firstItem.obj;
        fl.trace(firstItemObj.layer.name+"layerName");
    }
} else {
    alert("failed, no objects of type " + typeToSearchFor + " found");
}
```

## See also

[Flash.findObjectInDocByName()](../Flash_object/Flash27.md)
