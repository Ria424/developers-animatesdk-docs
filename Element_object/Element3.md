# Element.getPublishPersistentData()

## Availability

Adobe Animate.

## Usage

element.getPublishPersistentData(name, format)

## Parameters

### **name**

#### Type

```typescript
string
```

#### Description

A string that specifies the name of the persistent data item (set with [Element.setPersistentData()](../Element_object/Element17.md)).

### **format**

#### Type

```typescript
string
```

#### Description

A string that specifies the publishing format.


***Note:** *EMBED_SWF* is a special built-in publishing format for persistent data. If set, the persistent data will be embedded in the SWF file every time a document is published. The persistent data can then be accessed via ActionScript with the .metaData property. This requires SWF version 19 (Flash Player 11.6) and above and is only for symbol instances onstage. Other custom publishing formats may be specified for custom JSFL scripts if this method is called with the same format.*

## Returns

True if the specified persistent data is enabled for the specified format. Otherwise False.

### Type

```typescript
boolean
```

## Description

Method; Indicates whether publishing of a specified persistent data item is enabled for the specified format on an element.

## Example

The following example illustrates the use of this method:

```javascript
var doc = fl.getDocumentDOM();

// set the data
if (doc) {
    // get the first selected element
    var elem = doc.getTimeline().layers[0].frames[0].elements[0];
    if (elem) {
        // add persistent data "myAlign" of "left"
        elem.setPersistentData("myAlign", "string", "left");
        // enable publishing of persistent data to SWF for the element
        elem.setPublishPersistentData("myAlign", "_EMBED_SWF_", true);
        // enable publishing to SWF for entire document
        doc.setPublishDocumentData("_EMBED_SWF_", true);
    }
}

// example getting data
if (doc && doc.getPublishDocumentData("_EMBED_SWF_")) {
    // get the first selected element
    var elem = doc.getTimeline().layers[0].frames[0].elements[0];
    if (elem && elem.hasPersistentData("myAlign") && elem.getPublishPersistentData("myAlign", "_EMBED_SWF_")) {
        alert("elem.metaData.myAlign = '" + elem.getPersistentData("myAlign") + "' will be embedded in SWF when published.");
    }
}
```

## See also

[Element.setPublishPersistentData()](../Element_object/Element18.md)
