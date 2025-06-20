# Item.setPublishData()

## Availability

Adobe Animate.

## Usage

library.setPublishData(name, format, publish)

## Parameters

### **name**

#### Type

```typescript
string
```

#### Description

A string that contains the name of the persistent data item, as specified in "[Item.addData()](../Item_object/Item.md)".

### **format**

#### Type

```typescript
string
```

#### Description

Specifies the publishing format.

***Note:** \_EMBED\_SWF\_ is a special built-in publishing format for persistent data. If set, the persistent data is embedded in the SWF file every time a document is published. The persistent data can then be accessed via ActionScript with the*
*.metaData property. This feature applies to SWF version 19 (Flash Player 11.6) and above and only for symbol instances onstage. Other custom publishing formats may be specified for custom JSFL scripts if getPublishPersistentData() is called with the same format.*

### **publish**

#### Type

```typescript
boolean
```

#### Description

A boolean that indicates whether to enable or disable publishing of persistent data for the specified format.

## Returns

None.

### Type

```typescript
void
```

## Description

Method; Enables publishing of persistent data for a library item.

## Example

The following example illustrates use of this method:

```javascript
var doc = fl.getDocumentDOM();

// Example setting library data
if (doc) {
    var libItem = doc.library.items[0];
    if (libItem) {
        libItem.addData("sampleData", "string", "Hello! I am persistent Data.");
        libItem.setPublishData("sampleData", "_EXTERN_JSON_", true);
        // enable JSON publishing for this document
        doc.setPublishDocumentData("_EXTERN_JSON_", true);
    }
}

// Example getting instance data
if (doc && doc.getPublishDocumentData("_EXTERN_JSON_")) {
    var libItem = doc.library.items[0];
    if (libItem) {
        if (libItem.hasData("sampleData") && libItem.getPublishData("sampleData", "_EXTERN_JSON_")) {
            alert("publish persistent data for libElem: sampleData = '" + libItem.getData("sampleData") + "'");
        }
    }
}
```

## See also

[Item.getPublishData()](../Item_object/Item2.md)
